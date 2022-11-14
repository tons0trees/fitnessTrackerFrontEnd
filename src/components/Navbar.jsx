import React from 'react'
import {Outlet} from 'react-router-dom'
import LoginPanel from './LoginPanel';

const Navbar = ({ user, setUser }) => {
    return (
        <>
            <div id='navbar'>
                <h2>I am navbar</h2>
                {user ? <button onClick={() => {}}>Logout</button>: <LoginPanel setUser={setUser} />}
            </div>

            <Outlet />
        </>
    );
};

export default Navbar