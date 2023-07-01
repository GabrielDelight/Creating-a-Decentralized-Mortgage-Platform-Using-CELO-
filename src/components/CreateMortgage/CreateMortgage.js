import React, { useState } from "react";
import ContractHook from "../../Hooks/ContractHook";
import classes from "./CreateMortgage.module.css";
import Swal from "sweetalert2";
import Loading from "../LoadingIcon/Loading";

const CreateMortgage = (props) => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onHandleClick = (el) => {
    if (el.target.id === "parent-div") {
      props.onCloseModal();
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
      setIsLoading(true);

      const {
        lenderName,
        lenderDescription,
        minimumAmount,
        maximumAmount,
        loanTerms,
        products,
        startDate,
        interestRate,
      } = formData;

      contractInstance.methods
        .createMortgage(
          address,
          lenderName,
          lenderDescription,
          parseInt(minimumAmount),
          parseInt(maximumAmount),
          parseInt(loanTerms),
          products,
          new Date().toISOString(),
          parseInt(interestRate)
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
    <div className={classes.container} id="parent-div" onClick={onHandleClick}>
      <div className={classes.wrapper}>
        <div>
          <input
            onChange={onChnageHandler}
            name="lenderName"
            type="text"
            placeholder="Lender name"
          />
          <input
            onChange={onChnageHandler}
            name="lenderDescription"
            type="text"
            placeholder="Lender description"
          />
          <input
            onChange={onChnageHandler}
            name="minimumAmount"
            type={"number"}
            placeholder="Maximim: 2 CELO"
          />
          <input
            onChange={onChnageHandler}
            name="maximumAmount"
            type={"number"}
            placeholder="Minimum: 5 CELO"
          />
          <input
            onChange={onChnageHandler}
            name="loanTerms"
            type={"number"}
            placeholder="Loan terms: eg 2, 3, 5 years"
          />
          <input
            onChange={onChnageHandler}
            name="interestRate"
            type={"number"}
            placeholder="Integrest rate: 4, 5. 7"
          />
          <input
            onChange={onChnageHandler}
            name="products"
            type={"text"}
            placeholder="Products: Student, Parent, Business loan "
          />
          {!isLoading ? (
            <input
              onClick={onSubmithandler}
              type={"button"}
              value={"Create Mortgage"}
            />
          ) : (
            <Loading />
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default CreateMortgage;
