import React, { useState } from "react";
import classes from "./LoanApplicationFormComponent.module.css";
const LoanApplicationFormComponent = (props) => {
  const [formData, setFormData] = useState({});
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

  const onSubmithandler = () => {
    console.log(formData);
  };

  return (
    <div className={classes.container} id="parent--div" onClick={onHandleClick}>
      <div className={classes.wrapper}>
        <div>
        <input
            onChange={onChnageHandler}
            name="LenderDescription"
            type="text"
            placeholder="Full name"
          />
          <input
            onChange={onChnageHandler}
            name="scorePoint"
            type="number"
            placeholder="Score point"
          />
   
          <input
            onChange={onChnageHandler}
            name="minimumAmount"
            type={"number"}
            placeholder="Loan amount: 2 CELO"
          />

          <input
            onChange={onChnageHandler}
            name="loanTerm"
            type={"number"}
            placeholder="Loan term: eg 2, 3, 5 years"
          />
          <input
            onChange={onChnageHandler}
            name="products"
            type={"text"}
            placeholder="Products: Student, Parent, Business loan "
          />
          <div>
            <label>Start date</label>
            <input
              onChange={onChnageHandler}
              name="startDate"
              type={"date"}
              min={new Date().toISOString().substr(0, 10)}
              placeholder="Minimum: 5 CELO"
            />
          </div>
          <input
            onSubmit={onSubmithandler}
            type={"button"}
            value={"Apply"}
          />
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationFormComponent;
