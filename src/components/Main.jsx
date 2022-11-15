import React, { useState, useEffect }  from "react"
import {BrowserRouter, Routes, Route } from "react-router-dom"
import { getCurrentUser } from "../api"
import { Navbar, RegisterPanel, RoutineList, ActivityTab } from "./"

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
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar user={user} setUser={setUser}/>}>
                        <Route path="routines" element={<RoutineList user={null}/>}/>
                        <Route path="activities" element={<ActivityTab user={user}/>} />
                        <Route path="register" element={<RegisterPanel setUser={setUser}/>}/>
                        <Route path="myroutines" element={<RoutineList user={user}/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main;