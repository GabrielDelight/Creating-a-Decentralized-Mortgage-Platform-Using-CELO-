import React, { useState } from "react";
import classes from "./MortageList.module.css";
const MortageList = () => {
  const [isDisabbled, setIsDisabled] = useState(false);
  return (
      <div className={classes.list}>
        <h1>Express Mortage</h1>
        <h3>Best Morrtage Platform</h3>
        <br />
        <p>Minimum: 2 celo</p>
        <p>Maximum: 5 celo</p>
        Terms: 2, 5 years
        <br />
        <br />
        <p>Product: Student and parents loan</p>
        <p>Contract: 0x49bE700C28d7700C200C2700C2B</p>
        <div className={classes.bottom_footer}>
        <div className={classes.button_container}>
          <button disabled={isDisabbled}>
            {isDisabbled ? "Not available" : "Apply"}
          </button>
        </div>
        <div>
            <p>Balance: 12 Celo</p>
          </div>
        </div>
      </div>

  );
};

export default MortageList;
