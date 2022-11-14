import React from 'react'
import LoginPanel from './LoginPanel';

const Navbar = ({ setUser }) => {
    return (
        <div id='navbar'>
            <h2>I am navbar</h2>
            <LoginPanel setUser={setUser} />
        </div>
    );
};

export default Navbar