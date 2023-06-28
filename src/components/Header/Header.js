import React, { useState } from "react";
import classes from "./HeaderStyles.module.css";
import { useCelo } from "@celo/react-celo";
import CreateMortgage from "../  Mortgage /CreateMortgage";
const Header = () => {
  const { connect } = useCelo();
  const [formIsActive, setFormIsActive] = useState(false);

  const onCreateMortgageHandler = () => {
    setFormIsActive(!formIsActive);
  };
  const MyMorgageHandler = () => {
  };



  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <h1>MortgageDApp</h1>
        </div>

        <div className={classes.nav}>
          <button onClick={onCreateMortgageHandler}>Create Mortgage </button>
          <button onClick={MyMorgageHandler}>My Mortgage</button>

          <button className={classes.wallet_connect} onClick={connect}>
            Wallet connect
          </button>
        </div>
      </header>
    
    {formIsActive?<CreateMortgage onCloseModal={onCreateMortgageHandler} />: null }

        
    </>
  );
};

export default Header;
