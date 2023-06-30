import React, { useState } from "react";
import Deposit from "../Deposit/Deposit";
import LoanApplicationFormComponent from "../LoanForm/LoanApplicationFormComponent";
import Mortgators from "../Mortgators/Mortgagors";
import Withdraw from "../Withdraw/Withdraw";
import classes from "./MortageList.module.css";
const MortgageList = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDeposit, setIsDeposit] = useState(false);
  const [isWithdraw, setIsWithdraw] = useState(false);
  const [showMortgagors, setShowMortgagors] = useState(false);
  const [showForm, setSowForm] = useState(false);

  const onToggleDepositHandler = () => {
    setIsDeposit(!isDeposit);
  };
  const onToggleWithdrawHandler = () => {
    setIsWithdraw(!isWithdraw);
  };
  const MortageHandler = () => {
    setShowMortgagors(!showMortgagors);
  };

  const applicationFomrHandler = () => {
    setSowForm(!showForm);
  };

  return (
    <>
      <div className={classes.list}>
        <h1>Express Mortage</h1>
        <h3>Best Morrtage Platform</h3>
        <br />
        <p>Minimum: 2 celo</p>
        <p>Maximum: 5 celo</p>
        <p>Interest Rate: 4%</p>
        <p>Loan Term: 2, 5 years</p>
        <br />
        <br />
        <p>Product: Student and parents loan</p>
        <p>Lender address: 0x49bE700C28d7700C200C2700C2B</p>
        <div className={classes.bottom_footer}>
          <div className={classes.button_container}>
            {false ? (
              <>
                <button
                  disabled={isDisabled}
                  onClick={onToggleDepositHandler}
                  style={{ backgroundColor: "green" }}
                >
                  Deposit
                </button>

                <button
                  disabled={isDisabled}
                  onClick={onToggleWithdrawHandler}
                  style={{ backgroundColor: "hotpink" }}
                >
                  Withdraw
                </button>
                <button
                  disabled={isDisabled}
                  onClick={MortageHandler}
                  style={{ backgroundColor: "black" }}
                >
                  My Mortgagors
                </button>
              </>
            ) : (
              <>
                {isDisabled ? (
                  <button disabled>Not available</button>
                ) : (
                  <button onClick={applicationFomrHandler}>Apply</button>
                )}
              </>
            )}
          </div>
          <div>
            <p>Balance: 12 Celo</p>
          </div>
        </div>
      </div>
      {isDeposit ? <Deposit closeModal={onToggleDepositHandler} /> : null}
      {isWithdraw ? <Withdraw closeModal={onToggleWithdrawHandler} /> : null}
      {showMortgagors ? (
        <Mortgators closeModal={MortageHandler} payButtonVisibility={false} />
      ) : null}
      {showForm ? (
        <LoanApplicationFormComponent
          closeModal={applicationFomrHandler}
          payButtonVisibility={false}
        />
      ) : null}
    </>
  );
};

export default MortgageList;
