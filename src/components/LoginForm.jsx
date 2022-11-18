import React, { useState } from "react"
import ReactModal from "react-modal";
import { Link } from 'react-router-dom'
import { logIn } from "../api";


const LoginForm = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [currentError, setCurrentError] = useState(null)

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const user = await logIn({
                username: username,
                password: password
            })

            if (user.error) {
                setCurrentError(user)
            } else {
                setUser(user)
                setCurrentError(null)
            }
        } catch (error) {
            console.log(error);
        }
        setPassword('')
        setUsername('')
    }

    return (
        <div className="login_form_panel">
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
            <ReactModal 
                isOpen={isObject(currentError)}
                onRequestClose={() => setCurrentError(null)}
            >
                I'm an error
            </ReactModal>
        </div> 
    )
}

export default LoginForm;