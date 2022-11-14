import React, { useState, useEffect }  from "react"
import { getCurrentUser } from "../api"
import {LoginPanel, Navbar, RegisterPanel, RoutineList} from "./"

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
            {user ? <RoutineList user={user}/> : null}
        </div>
    )
}

export default Main;