import React from "react";
import MortgageList from "./MortgageList";
import classes from "./MortageList.module.css";
import WalletChart from "./LoanCharts";
import ContractHook from "../../Hooks/ContractHook";

const Mortgage = () => {
  const { mortgages, contractBalance, metamaskWallet } = ContractHook();
  return (
    <>
      <div className={classes.account_contaner}>
        <div>
          <h1 className={classes.contract_balance}>Contract Wallet: {contractBalance} CELO</h1>
          <h1 className={classes.loan_balance}>MetaMask Balance: {metamaskWallet} CELO</h1>
        </div>

        <WalletChart />
      </div>
      <div className={classes.list_container}>
        {mortgages.map((cur, index) => (
          <MortgageList data={cur} index={index} />
        ))}
      </div>
    </>
  );
};

export default Mortgage;
