import React, { useState, useEffect }from 'react'
import { ActivityItem, EditRoutinePanel } from "./"
import { deleteRoutine } from '../api'

const RoutineItem = ({routine, canDelete: isOwner, list, setList}) => {
    const [editing, setEditing] = useState(false)

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
            {isOwner ? 
            <div>
                <button onClick={handleDelete}>DELETE</button> <button onClick={() => setEditing(!editing)}>EDIT</button>
            </div>
            : null}
            {editing ? <EditRoutinePanel /> : null}
        </div>
    )
}

export default RoutineItem