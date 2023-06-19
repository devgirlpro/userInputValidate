import React from "react";
import Card from "./Card";
import Button from "./Button";
import calsses from "./ErrorModal.module.css";

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            <div className={calsses.backdrop} onClick={props.onConfirm}/>
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
        </React.Fragment>
    );
};

export default ErrorModal;
