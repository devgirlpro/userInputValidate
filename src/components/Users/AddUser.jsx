import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredUserAge, setEnteredeUserAge] = useState("");
    const [error, setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        if (
            enteredUsername.trim().length === 0 ||
            enteredUserAge.trim().length === 0
        ) {
            setError({
                title: "Invalid input",
                message:
                    "Please enter a valid name and age (non-empty values).",
            });
            return;
        }
        //add + before enteredUserAge to change tring into number
        if (+enteredUserAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please input a valide age  (> 0)",
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredUserAge);

        setEnteredUsername("");
        setEnteredeUserAge("");
    };

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    };

    const userAgeChangeHandler = (e) => {
        setEnteredeUserAge(e.target.value);
    };

    const errorHandler = () => {
      setError();
    }

    return (
        <Wrapper>
            {error && (
                <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />
            )}

            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    />
                    <label htmlFor="userage">Age (Year)</label>
                    <input
                        id="userage"
                        type="number"
                        value={enteredUserAge}
                        onChange={userAgeChangeHandler}
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
