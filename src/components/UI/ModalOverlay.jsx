import React from 'react';
import Card from './Card';
import calsses from "./ErrorModal.module.css";
import Button from './Button';

const ModalOverlay = (props) => {
  return (
    <Card className={calsses.modal}>
                <header className={calsses.header}>
                    <h1>{props.title}</h1>
                </header>
                <div className={calsses.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={calsses.actions}>
                    <Button onClick={props.onConfirm} >okay</Button>
                </footer>
            </Card>
  )
}

export default ModalOverlay;