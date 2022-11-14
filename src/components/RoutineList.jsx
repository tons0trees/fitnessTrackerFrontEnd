import React, { useState, useEffect } from 'react'
import { RoutineItem } from './'
import { getUserRoutines } from '../api'

const RoutineList = ({user}) => {
    const [routineList, setRoutineList] = useState([])

    useEffect(() => {
        async function callGetUserRoutines() {
            console.log(user);
            const list = await getUserRoutines(user.username)
            setRoutineList(list)
        }
        callGetUserRoutines()
    },[])

    return (
        <div className='routine_list'>
            {routineList.map((elem) => {
                return <RoutineItem routine={elem}/>
            })}
        </div>
    )
}

export default RoutineList