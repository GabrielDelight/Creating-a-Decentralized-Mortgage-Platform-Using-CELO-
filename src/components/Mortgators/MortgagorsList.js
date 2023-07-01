import React, { useState } from "react";
import classes from "./Mortgagors.module.css";
import Loading from "../LoadingIcon/Loading";
import Swal from "sweetalert2";
import ContractHook from "../../Hooks/ContractHook";

const MortgagorsList = (props) => {
  const [showDeposit, setShowDeposit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { contractInstance, address } = ContractHook();


  const loanUnderWaitingHandler = (status) => {
    try {
      setIsLoading(true);
console.log(status, props.index)
      contractInstance.methods
        .loanUnderWaitingFunction(status, props.index)
        .send({
          from: address,
          gas: 3000000,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction hash:", hash);
        })
        .on("receipt", (receipt) => {
          console.log("Receipt:", receipt);
          Swal.fire(
            "Successful!",
            `You were successful in creating a mortgage.`,
            "success"
          );
          setIsLoading(false);
        })

        .on("error", (error) => {
          console.error("Error: occured", error);
          Swal.fire(
            "Transaction failed!",
            `Attempt to create a mortgage failed.`,
            "error"
          );
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={classes.container_list}>
        <p>
          <b>Full Name:</b>: {props.data.fullName}
        </p>
        <p>
          <b>Score Point:</b>: {props.data.scorePoint}
        </p>
        <p>
          <b>Home Price:</b>: {props.data.homePrice}
        </p>
        <p>
          <b>Down payment:</b> {props.data.downPayment}
        </p>
        <p>
          <b>Loan Amount</b>: {props.data.loanAmount} CELO
        </p>
        <p>
          <b>Loan Term</b>: {props.data.loanTerm}
        </p>
        <p>
          <b>Start Date</b>: {props.data.startDate}
        </p>
        <p>
          <b>Status</b>: {props.data.startDate}
        </p>
        <p>
          <b>Interest Rate</b>: {props.data.interestRate}
        </p>
        <p>
          <b>Mortgagor Address</b>: {props.data.mortgagorAddress}
        </p>
        <p>
          <b>Lender Address</b>: {props.data.lenderAddress}
        </p>
        {props.payButtonVisibility ? (
          <>
            <br />
            {/* <button onClick={onPayHandler}>Pay</button>       */}
          </>
        ) : (
          <>
            <br />
            <button
              onClick={() => loanUnderWaitingHandler("approved")}
              style={{ backgroundColor: "green" }}
            >
              Approved
            </button>
            <button
              onClick={() => loanUnderWaitingHandler("rejected")}
              style={{ backgroundColor: "red" }}
            >
              Reject
            </button>
            {isLoading && <Loading />}
          </>
        )}
      </div>
      {/* {showDeposit && <Deposit closeModal={onPayHandler} /> } */}
    </>
  );
};

export default MortgagorsList;
