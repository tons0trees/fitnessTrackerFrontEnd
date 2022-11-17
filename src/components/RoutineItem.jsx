import React, { useState }from 'react'
import { ActivityItem, EditRoutineForm, AddActivityForm } from "./"
import { deleteRoutine } from '../api'

const RoutineItem = ({routine, isOwner, list, setList}) => {
    const [readyToEdit, setReadyToEdit] = useState(false)
    const [readyToAddActivity, setReadyToAddActivity] = useState(false)

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
                    {routine && routine.activities && routine.activities.length ? routine.activities.map((elem) => {
                    return <li key={"activity_" + elem.id}><ActivityItem  activity={elem} isOwner={isOwner}/></li>
                    }) : null}
                </ol>
                    
            </div>
            {isOwner ? 
            <div>
                <button onClick={handleDelete}>DELETE</button>
                <button onClick={() => setReadyToEdit(!readyToEdit)}>EDIT</button>
                <button onClick={() => setReadyToAddActivity(!readyToAddActivity)}>ADD ACTIVITY</button>
            </div>
            : null}
            {readyToEdit ? <EditRoutineForm routine={routine} list={list} setList={setList} setReady={setReadyToEdit}/> : null}
            {readyToAddActivity ? <AddActivityForm routine={routine} list={list} setList={setList} setReady={setReadyToAddActivity}/> : null}
        </div>
    )
}

export default RoutineItem