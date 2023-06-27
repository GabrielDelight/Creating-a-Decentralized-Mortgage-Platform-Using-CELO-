import React from "react";
import MortageList from "./MortageList";
import classes from "./MortageList.module.css";

const Mortgage = () => {
  return (
    <div className={classes.list_container}>
      <MortageList />
      <MortageList />
      <MortageList />
      <MortageList />
    </div>
  );
};

export default Mortgage;
