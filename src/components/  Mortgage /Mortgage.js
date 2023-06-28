import React from "react";
import MortgageList from "./MortgageList";
import classes from "./MortageList.module.css";
import WalletChart from "./LoanCharts";

const Mortgage = () => {
  return (
    <>
      <div className={classes.account_contaner}>
        <div>

        <h1 className={classes.contract_balance}>Wallet: 87,0000 CELO</h1>
        <h1 className={classes.loan_balance}>Balance: 7,0000 CELO</h1>
        </div>

        <WalletChart />
      </div>
      <div className={classes.list_container}>

        <MortgageList />
        <MortgageList />
        <MortgageList />
        <MortgageList />
      </div>
    </>
  );
};

export default Mortgage;
