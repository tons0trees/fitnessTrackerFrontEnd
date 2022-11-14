import React, { useState, useEffect }  from "react"
import { getCurrentUser } from "../api"
import {LoginPanel, Navbar, RegisterPanel} from "./"

const Main = () => {
    const [user, setUser] = useState(null) 

    useEffect(() => {
      const localToken = localStorage.getItem("token")
      if (localToken) {
        async function saveUser() {
            const currentUser = await getCurrentUser()
            setUser(currentUser)
        }
        saveUser()
      }
      
    }, [])
    
    return (
        <div id="main">
            <Navbar />

            <RegisterPanel />
            <LoginPanel />
        </div>
    )
}

export default Main;