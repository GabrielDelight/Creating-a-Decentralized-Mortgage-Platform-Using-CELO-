import React, { useState } from "react";
import ContractHook from "../../Hooks/ContractHook";
import classes from "./LoanApplicationFormComponent.module.css";
import Swal from "sweetalert2";
import Loading from "../LoadingIcon/Loading";
const LoanApplicationFormComponent = (props) => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const onHandleClick = (el) => {
    if (el.target.id === "parent--div") {
      props.closeModal();
      console.log("Closibng");
    }
  };

  const onChnageHandler = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const { contractInstance, address } = ContractHook();

  const onSubmithandler = () => {
    try {
      const {
        homePrice,
        fullName,
        downPayment,
        scorePoint,
        loanAmount,
        loanTerm,
      } = formData;

      let startData = new Date().toISOString();
      setIsLoading(true);

      contractInstance.methods
        .createMortgagor(
          fullName,
          homePrice,
          downPayment,
          loanAmount,
          loanTerm,
          startData,
          props.data.interestRate,
          props.data.ownerAddress,
          scorePoint
        )
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
            "Application successful!",
            `You were successful in applying fot a loan.`,
            "success"
          );
          setIsLoading(false);
        })

        .on("error", (error) => {
          console.error("Error: occured", error);
          Swal.fire(
            "Transaction failed!",
            `Attempt to apply for  a mortgage failed.`,
            "error"
          );
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
    console.log(formData);
  };

  return (
    <div className={classes.container} id="parent--div" onClick={onHandleClick}>
      <div className={classes.wrapper}>
        <div>
          <input
            onChange={onChnageHandler}
            name="fullName"
            type="text"
            placeholder="Full name"
          />
          <input
            onChange={onChnageHandler}
            name="homePrice"
            type="number"
            placeholder="Home Price in CELO"
          />
          <input
            onChange={onChnageHandler}
            name="downPayment"
            type="number"
            placeholder="Down payment (initial house deposit) in CELO"
          />
          <input
            onChange={onChnageHandler}
            name="loanAmount"
            type={"number"}
            placeholder="Loan amount: eg 2 CELO"
          />

          <input
            onChange={onChnageHandler}
            name="scorePoint"
            type="number"
            placeholder="Score point"
          />

          <input
            onChange={onChnageHandler}
            name="loanTerm"
            type={"number"}
            placeholder="Loan term: eg 2, 3, 5 years"
          />

          <input onClick={onSubmithandler} type={"button"} value={"Apply"} />
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationFormComponent;
