import React, { useState } from "react";
import classes from "./Mortgagors.module.css";
import Deposit from "../Deposit/Deposit"

const MortgagorsList = (props) => {
  const [showDeposit, setShowDeposit] = useState(false)
  const onPayHandler = () => {
    setShowDeposit(!showDeposit)
  }

  return (
    <>
    
    <div className={classes.container_list}>
      <p><b>Home Price:</b>:</p>
      <p><b>Down payment:</b> </p>
      <p><b>Loan Amount</b>: 5 CELO</p>
      <p><b>Loan Term</b>:</p>
      <p><b>Start Date</b>:</p>
      <p><b>Status</b>: not paid</p>
      <p><b>Interest Rate</b>:</p>
      <p><b>Mortgagor Address</b>: </p>
      <p><b>Lender Address</b>:</p>
      {props.payButtonVisibility && <>
      <br />
      <button onClick={onPayHandler}>Pay</button>
      </>
      }
    </div>
    {showDeposit && <Deposit closeModal={onPayHandler} /> }
    </>
  );
};

export default MortgagorsList;
