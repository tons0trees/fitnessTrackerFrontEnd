import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm';

const Navbar = ({ user, setUser }) => {
    const nav = useNavigate()

    function handleLogout(event) {
        event.preventDefault()
        localStorage.removeItem("token")
        setUser(null)
        nav('/routines')
    }

    return (
        <>
            <div id='navbar'>
                <h2>I am navbar</h2>
                {user ? <button onClick={handleLogout}>Logout</button>: <LoginForm setUser={setUser} />}
            </div>
            <div id='nav_tabs'>
                <NavLink to='/routines'>Routines</NavLink>
                <NavLink to='/activities'>Activities</NavLink>
                { user ? <NavLink to='/myroutines'>My Routines</NavLink> : null }
            </div>

            <Outlet />
        </>
    );
};

export default Navbar