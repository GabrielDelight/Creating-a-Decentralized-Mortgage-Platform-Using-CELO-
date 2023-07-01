import React, { useEffect, useState } from 'react'
import ContractHook from '../../Hooks/ContractHook';
import classes from "./Mortgagors.module.css"
import MortgagorsList from './MortgagorsList'
const Mortgagors = (props) => {
const [mortgagorsArray, setMortgagorsArray] = useState([])
      // Closing the modal
  const onCloseModal = (el) => {
    if (el.target.id === "parent-modal") {
      props.closeModal();
    }
  };

  const {mortgagors, address} = ContractHook()
  useEffect(() => {
    if(props.lenderAddress){

      let myMortgagors = mortgagors.filter((el) => el.lenderAddress == props.lenderAddress)
      setMortgagorsArray(myMortgagors)
    }else {
      let myMortgagors = mortgagors.filter((el) => el.lenderAddress == address)
      setMortgagorsArray(myMortgagors)
      setMortgagorsArray(mortgagors)
    }
  }, [mortgagors])

  return (
    <div className={classes.container} onClick={onCloseModal} id="parent-modal" >
        <div className={classes.wrapper}>
          {mortgagorsArray.map((cur, index) => 
                <MortgagorsList data={cur} index={index} payButtonVisibility={props.payButtonVisibility} />
           )}
        </div>
    </div>
  )
}

export default Mortgagors