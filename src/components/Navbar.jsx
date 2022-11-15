import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import LoginPanel from './LoginPanel';

const Navbar = ({ user, setUser }) => {
    return (
        <>
            <div id='navbar'>
                <h2>I am navbar</h2>
                {user ? <button onClick={() => {}}>Logout</button>: <LoginPanel setUser={setUser} />}
            </div>
            <div id='nav_tabs'>
                <Link to='/routines'>Routines</Link>
                <Link to='/activities'>Activities</Link>
                { user ? <Link to='/myroutines'>My Routines</Link> : null }
            </div>

            <Outlet />
        </>
    );
};

export default Navbar