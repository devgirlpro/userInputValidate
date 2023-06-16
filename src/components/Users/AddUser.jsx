import React from "react";
import classes from "./AddUser.module.css";

const AddUser = () => {
    const addUserHandler = (event) => {
        event.preventDefoult();
    };

    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />

            <label htmlFor="userage">Age (Year)</label>
            <input id="userage" type="number" />

            <button type="submit">Add User</button>
            <button type="reset">Reset</button>
        </form>
    );
};

export default AddUser;
