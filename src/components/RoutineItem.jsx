import React, { useState, useEffect }from 'react'
import { ActivityItem } from "./"
import { deleteRoutine } from '../api'

const RoutineItem = ({routine, canDelete, list, setList}) => {

    async function handleDelete(event) {
        event.preventDefault()
        const deletedRoutine= await deleteRoutine({id: routine.id})
        const newList = list.filter((elem) => elem.id != routine.id)
        setList(newList);
    }

    return (
        <div className='routine_item'>
            
            <span>
                <h1>{routine.name}</h1>
                <p>{routine.creatorName}</p>
            </span>
            <div>
                <p>{routine.goal}</p>
                <ol>
                    {routine.activities.map((elem) => {
                    return <li key={"activity_" + elem.id}><ActivityItem  activity={elem}/></li>
                    })}
                </ol>
                    
            </div>
            {canDelete ? <button onClick={handleDelete}>DELETE</button> : null}
        </div>
    )
}

export default RoutineItem