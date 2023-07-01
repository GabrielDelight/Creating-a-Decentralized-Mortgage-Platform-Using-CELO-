import React, { useState } from "react";
import classes from "./HeaderStyles.module.css";
import { useCelo } from "@celo/react-celo";
import CreateMortgage from "../CreateMortgage/CreateMortgage";
import Mortgagors from "../Mortgators/Mortgagors";
import ContractHook from "../../Hooks/ContractHook";
const Header = () => {
  const { connect } = useCelo();
  const [formIsActive, setFormIsActive] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const onCreateMortgageHandler = () => {
    setFormIsActive(!formIsActive);
  };
  const LoanPortfolioHandler = () => {
    setShowPortfolio(!showPortfolio);
  };


  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <h1>MortgageDApp</h1>
        </div>

        <div className={classes.nav}>
          <button onClick={onCreateMortgageHandler}>Create Mortgage </button>
          <button onClick={LoanPortfolioHandler}>Loan portfolio</button>

          <button className={classes.wallet_connect} onClick={connect}>
            Wallet connect
          </button>
        </div>
      </header>

      {formIsActive ? (
        <CreateMortgage onCloseModal={onCreateMortgageHandler} />
      ) : null}
      {showPortfolio && (
        <Mortgagors
          payButtonVisibility={true}
          closeModal={LoanPortfolioHandler}
        />
      )}
    </>
  );
};

export default Header;
