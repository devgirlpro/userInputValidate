import React from 'react';
import calsses from "./ErrorModal.module.css";

const  Backdrop = (props) => {
  return (
    <div className={calsses.backdrop} onClick={props.onConfirm}/>
  )
}

export default Backdrop