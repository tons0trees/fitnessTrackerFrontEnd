import React, { useState, useEffect } from 'react'
import { RoutineItem } from './'
import { getUserRoutines, getPublicRoutines } from '../api'

const RoutineList = ({user}) => {
    const [routineList, setRoutineList] = useState([])

    useEffect(() => {
        if (user) {
            async function callGetUserRoutines() {
                const list = await getUserRoutines(user.username)
                setRoutineList(list)
            }
            callGetUserRoutines()
        } else {
            async function callGetPubicRoutines() {
                const list = await getPublicRoutines()
                setRoutineList(list)
            }
            callGetPubicRoutines()
        }
    },[])

    return (
        <div className='routine_list'>
            {routineList.map((elem) => {
                return <RoutineItem key={"routine_" + elem.id} routine={elem}/>
            })}
        </div>
    )
}

export default RoutineList