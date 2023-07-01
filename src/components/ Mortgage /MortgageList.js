import React, { useState } from "react";
import ContractHook from "../../Hooks/ContractHook";
import Deposit from "../Deposit/Deposit";
import LoanApplicationFormComponent from "../LoanApplicationForm/LoanApplicationFormComponent";
import Mortgators from "../Mortgators/Mortgagors";
import Withdraw from "../Withdraw/Withdraw";
import classes from "./MortageList.module.css";
import BigNumber from "bignumber.js";
const MortgageList = (props) => {
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

  // console.log(props)
  const { address } = ContractHook();
  let address1 = address.toUpperCase().toString();
  let address2 = props.data.ownerAddress.toUpperCase().toString();
  return (
    <>
      <div className={classes.list}>
        <h1>{props.data.lenderName}</h1>
        <h3>{props.data.lenderDescription}</h3>
        <br />
        <p>Minimum: {props.data.minimumAmount} celo</p>
        <p>Maximum: {props.data.maximumAmount} celo</p>
        <p>Interest rate: {props.data.interestRate}%</p>
        <p>Loan Term: {props.data.loanTerms} years</p>
        <br />
        <br />
        <p>Product: {props.data.products}</p>
        <p>Lender address: {props.data.ownerAddress}</p>
        <div className={classes.bottom_footer}>
          <div className={classes.button_container}>
            {address1.includes(address2) ? (
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
                {parseInt(props.data.balance) == 0 ? (
                  <button disabled>Not available, low balance</button>
                ) : (
                  <button onClick={applicationFomrHandler}>Apply</button>
                )}
              </>
            ) : (
              <>
                {parseInt(props.data.balance) == 0 ? (
                  <button disabled>Not available, low balance</button>
                ) : (
                  <button onClick={applicationFomrHandler}>Apply</button>
                )}
              </>
            )}
          </div>
          <div>
            <p>Balance: {
            new BigNumber(props.data.balance).dividedBy(1e18).toString()
            } Celo</p>
          </div>
        </div>
      </div>
      {isDeposit ? <Deposit closeModal={onToggleDepositHandler} index={props.index} /> : null}
      {isWithdraw ? <Withdraw closeModal={onToggleWithdrawHandler} index={props.index}  /> : null}
      {showMortgagors ? (
        <Mortgators lenderAddress={props.data.ownerAddress} closeModal={MortageHandler} payButtonVisibility={false} />
      ) : null}
      {showForm ? (
        <LoanApplicationFormComponent
        data={props.data}
          closeModal={applicationFomrHandler}
          payButtonVisibility={false}
        />
      ) : null}
    </>
  );
};

export default MortgageList;
