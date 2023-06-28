import React, { useState } from "react";
import classes from "./CreateMortgage.module.css";
const CreateMortgage = (props) => {
    const [formData, setFormData] = useState({})
  const onHandleClick = (el) => {
    if (el.target.id === "parent-div") {
      props.onCloseModal();
      console.log("Closibng")
    }
  };

  const onChnageHandler = (e) => {
    setFormData((prevState) => {
        return {
            ...prevState,
            [e.target.name]: e.target.value
        }
    })
  } 

  
  const onSubmithandler = () => {
      console.log(formData)
  }

  return (
    <div className={classes.container} id="parent-div" onClick={onHandleClick}>
      <div className={classes.wrapper}>
        <div>
          <input onChange={onChnageHandler} name="lenderName" type="text" placeholder="Lender name" />
          <input onChange={onChnageHandler} name="LenderDescription" type="text" placeholder="Lender Description" />
          <input onChange={onChnageHandler} name="minimumAmount" type={"number"} placeholder="Maximim: 2 CELO" />
          <input onChange={onChnageHandler} name="maximumAmount" type={"number"}placeholder="Minimum: 5 CELO" />
          <input onChange={onChnageHandler} name="terms" type={"text"} placeholder="Terms: eg 2, 3, 5 years" />
          <input onChange={onChnageHandler} name="products" type={"text"} placeholder="Products: Student, Parent, Business loan " />
          <input onSubmit={onSubmithandler} type={"button"} value={"Create Mortgage"} />
        </div>
      </div>
    </div>
  );
};

export default CreateMortgage;
