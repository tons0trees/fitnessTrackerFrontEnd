import React from "react"
import {LoginPanel, Navbar, RegisterPanel} from "./"

const Main = () => {
    return (
        <div id="main">
            <Navbar />
            <RegisterPanel />
            <LoginPanel />
        </div>
    )
}

export default Main;