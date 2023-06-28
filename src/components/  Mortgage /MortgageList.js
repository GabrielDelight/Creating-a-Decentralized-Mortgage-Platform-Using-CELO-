import React, { useState } from "react";
import Deposit from "../Deposit/Deposit";
import Mortgators from "../Mortgators/Mortgagors";
import Withdraw from "../Withdraw/Withdraw";
import classes from "./MortageList.module.css";
const MortgageList = () => {
  const [isDisabbled, setIsDisabled] = useState(false);
  const [isDeposit, setIsDeposit] = useState(false);
  const [isWithdraw, setIsWithdraw] = useState(false);
  const [showMortgagors, setShowMortgagors] = useState(false);

  const onToggleDepositHandler = () => {
    setIsDeposit(!isDeposit);
  };
  const onToggleWithdrawHandler = () => {
    setIsWithdraw(!isWithdraw);
  };
  const MorrtageHandler = () => {
    setShowMortgagors(!showMortgagors);
  };

  return (
    <>
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
            {true ? (
              <>
                <button
                  disabled={isDisabbled}
                  onClick={onToggleDepositHandler}
                  style={{ backgroundColor: "green" }}
                >
                  Deposit
                </button>

                <button
                  disabled={isDisabbled}
                  onClick={onToggleWithdrawHandler}
                  style={{ backgroundColor: "hotpink" }}
                >
                  Withdraw
                </button>
                <button
                  disabled={isDisabbled}
                  onClick={MorrtageHandler}
                  style={{ backgroundColor: "black" }}
                >
                  My Mortgagors
                </button>
              </>
            ) : (
              <button disabled={isDisabbled}>
                {isDisabbled ? "Not available" : "Apply"}
              </button>
            )}
          </div>
          <div>
            <p>Balance: 12 Celo</p>
          </div>
        </div>
      </div>
      {isDeposit ? <Deposit closeModal={onToggleDepositHandler} /> : null}
      {isWithdraw ? <Withdraw closeModal={onToggleWithdrawHandler} /> : null}
      {showMortgagors ? <Mortgators closeModal={MorrtageHandler} payButtonVisibility={false} /> : null}
      
    </>
  );
};

export default MortgageList;
