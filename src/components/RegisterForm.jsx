import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import { register } from "../api";

const RegisterForm = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        const newUser = await register({
            username: username,
            password: password
        })
        setUser(newUser)
        setPassword('')
        setUsername('')
        nav("/")
    }

    return (
        <div className="register_panel">
            <form id="register_form" onSubmit={handleSubmit}>
                <label htmlFor="username_input">
                    Username:
                    <input type="text" name="username_input" value={username} onChange={(elem) => setUsername(elem.target.value)} />
                </label>
                <label htmlFor="password_input">
                    Password:
                    <input type="password" name="password_input" value={password} onChange={(elem) => setPassword(elem.target.value)}/>
                </label>
                <input type="submit" value="Register" />
            </form>
        </div> 
    )
}

export default RegisterForm;