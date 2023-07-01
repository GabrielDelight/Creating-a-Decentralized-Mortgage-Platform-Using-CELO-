import React, { useState, useEffect } from "react";
import { useCelo } from "@celo/react-celo";
import Web3 from "web3";
import { newKitFromWeb3 } from "@celo/contractkit";
import { abiData } from "../data/abi";
import BigNumber from "bignumber.js";
import Swal from "sweetalert2";

const ContractHook = () => {
  const { address } = useCelo();
  const [depositBalance, setDepositBalance] = useState("");
  const [contractBalance, setContractBalance] = useState("");
  const [metamaskWallet, setMetamaskWallet] = useState("");
  const [mortgages, setMortgages] = useState([]);
  const [mortgagors, setMortgors] = useState([]);
  const [getAddressFromContract, setGetAddressFromContract] = useState();

  const web3 = new Web3("https://alfajores-forno.celo-testnet.org");
  const kit = newKitFromWeb3(web3);

  kit.addAccount(
    "ec4aa7efc0f434dc888bbafd1655d0837afa73d706b5e9ae6e266bdf2b9ce9e5"
  );

  let contractInstance = new kit.web3.eth.Contract(
    abiData,
    "0xB4eCC0602D082E718B1011B43ac3b71b8EC7b96b"
  );

  // console.log("address,", address)

  useEffect(() => {
    async function isConnectedToContract() {
      try {
        const result = await contractInstance.methods.test().call();
        console.log("Test result:", result);

        const getAddressFrpmCOntract = await contractInstance.methods
          .getAddress()
          .call();
        setGetAddressFromContract(getAddressFrpmCOntract);

        // Get metamask balance
        let balance = await kit.web3.eth.getBalance(address);
        setMetamaskWallet(new BigNumber(balance).dividedBy(1e18).toString());

        const contractBalance = await contractInstance.methods
          .contractBalance()
          .call();
        setContractBalance(
          new BigNumber(contractBalance).dividedBy(1e18).toString()
        );

        const getMortgages = await contractInstance.methods
          .viewMortgages()
          .call();
        setMortgages(getMortgages);


        const getMortgagors = await contractInstance.methods
        .viewMortgagors()
        .call();
      
        setMortgors(getMortgagors)
      } catch (error) {
        console.log(error);
      }
    }
    isConnectedToContract();

    let intervalId = setInterval(() => {
      isConnectedToContract();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  
  return {
    contractInstance,
    metamaskWallet,
    contractBalance,
    depositBalance,
    kit,
    address,
    mortgages,    
    mortgagors
  };
};

export default ContractHook;
