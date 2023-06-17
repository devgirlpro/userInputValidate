import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = () => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredUserAge, setEnteredeUserAge] = useState("");

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUsername, enteredUserAge);
    };

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    };

    const userAgeChangeHandler = (e) => {
        setEnteredeUserAge(e.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    onChange={usernameChangeHandler}
                />
                <label htmlFor="userage">Age (Year)</label>
                <input
                    id="userage"
                    type="number"
                    onChange={userAgeChangeHandler}
                />
                <Button type="submit">Add User</Button>
                <br /> <br />
                <Button type="reset">Reset</Button>
            </form>
        </Card>
    );
};

export default AddUser;
