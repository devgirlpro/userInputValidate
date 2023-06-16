import React from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = () => {
    const addUserHandler = (event) => {
        event.preventDefoult();
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />

                <label htmlFor="userage">Age (Year)</label>
                <input id="userage" type="number" />

                <Button type="submit">Add User</Button>

                <button type="reset">Reset</button>
            </form>
        </Card>
    );
};

export default AddUser;
