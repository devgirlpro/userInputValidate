import React, { useState, useRef } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    /*  const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredUserAge, setEnteredeUserAge] = useState(""); */
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message:
                    "Please enter a valid name and age (non-empty values).",
            });
            return;
        }
        //add + before enteredUserAge to change tring into number
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please input a valide age  (> 0)",
            });
            return;
        }

        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";

        /* setEnteredUsername("");
        setEnteredeUserAge(""); */
    };

    /*   const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    };

    const userAgeChangeHandler = (e) => {
        setEnteredeUserAge(e.target.value);
    }; */

    const errorHandler = () => {
        setError();
    };

    return (
        <Wrapper>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}

            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        /*   value={enteredUsername}
                        onChange={usernameChangeHandler} */
                        ref={nameInputRef}
                    />
                    <label htmlFor="userage">Age (Year)</label>
                    <input
                        id="userage"
                        type="number"
                        /*  value={enteredUserAge}
                        onChange={userAgeChangeHandler} */
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                    <br /> <br />
                    <Button type="reset">Reset</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
