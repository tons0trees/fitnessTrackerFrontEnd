import React, { useState, useEffect } from 'react'
import { RoutineItem } from './'
import { getUserRoutines, getPublicRoutines } from '../api'

const RoutineList = ({user}) => {
    const [routineList, setRoutineList] = useState([])

    useEffect(() => {
        console.log("**** look here ****")
        if (user) {
            console.log("**** USER ****", user)
            async function callGetUserRoutines() {
                const list = await getUserRoutines(user.username)
                setRoutineList(list)
            }
            callGetUserRoutines()
        } else {
            console.log("**** NO USER ****")
            async function callGetPubicRoutines() {
                const list = await getPublicRoutines()
                setRoutineList(list)
            }
            callGetPubicRoutines()
        }
    },[user])

    return (
        <div className='routine_list'>
            {routineList.map((elem) => {
                return <RoutineItem key={"routine_" + elem.id} routine={elem}/>
            })}
        </div>
    )
}

export default RoutineList