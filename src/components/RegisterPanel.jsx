import React from "react"
import { register } from "../api";

const RegisterPanel = () => {

    async function handleSubmit(event) {
        event.preventDefault();
        await register({
            username: event.target[0].value,
            password: event.target[1].value
        })
    }

    return (
        <div className="register_panel">
            <form id="register_form" onSubmit={handleSubmit}>
                <label htmlFor="username_input">
                    Username:
                    <input type="text" name="username_input" />
                </label>
                <label htmlFor="password_input">
                    Password:
                    <input type="password" name="password_input" />
                </label>
                <input type="submit" value="Register" />
            </form>
        </div> 
    )
}

export default RegisterPanel;