import React from 'react'
import classes from "./Mortgagors.module.css"
import MortgagorsList from './MortgagorsList'
const Mortgagors = (props) => {

      // Closing the modal
  const onCloseModal = (el) => {
    if (el.target.id === "parent-modal") {
      props.closeModal();
    }
  };


  return (
    <div className={classes.container} onClick={onCloseModal} id="parent-modal" >
        <div className={classes.wrapper}>
                <MortgagorsList payButtonVisibility={props.payButtonVisibility} />
        </div>
    </div>
  )
}

export default Mortgagors