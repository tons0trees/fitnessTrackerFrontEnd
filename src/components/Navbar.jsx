import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import LoginPanel from './LoginPanel';

const Navbar = ({ user, setUser }) => {
    return (
        <>
            <div id='navbar'>
                <h2>I am navbar</h2>
                {user ? <button onClick={() => {}}>Logout</button>: <LoginPanel setUser={setUser} />}
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