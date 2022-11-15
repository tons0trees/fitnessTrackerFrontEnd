import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { logIn } from "../api";


const LoginPanel = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()
        const user = await logIn({
            username: username,
            password: password
        })
        setUser(user)
        setPassword('')
        setUsername('')
    }

    return (
        <div className="login_panel">
            <form id="login_form" onSubmit={handleSubmit}>
                <label htmlFor="username_input">
                    Username:
                    <input type="text" name="username_input" value={username} onChange={(elem) => setUsername(elem.target.value)} />
                </label>
                <label htmlFor="password_input">
                    Password:
                    <input type="password" name="password_input" value={password} onChange={(elem) => setPassword(elem.target.value)}/>
                </label>
                <input type="submit" value="Log In" />
            </form>
            <span>
                Don't have an account? 
                <Link to="/register"> Sign Up</Link>
            </span>
        </div> 
    )
}

export default LoginPanel;