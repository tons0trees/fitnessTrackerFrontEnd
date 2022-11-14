import React from "react"
import { logIn } from "../api";


const LoginPanel = () => {

    async function handleSubmit(event) {
        event.preventDefault();
        await logIn({
            username: event.target[0].value,
            password: event.target[1].value
        })
    }

    return (
        <div className="login_panel">
            <form id="login_form" onSubmit={handleSubmit}>
                <label htmlFor="username_input">
                    Username:
                    <input type="text" name="username_input" />
                </label>
                <label htmlFor="password_input">
                    Password:
                    <input type="password" name="password_input" />
                </label>
                <input type="submit" value="Log In" />
            </form>
        </div> 
    )
}

export default LoginPanel;