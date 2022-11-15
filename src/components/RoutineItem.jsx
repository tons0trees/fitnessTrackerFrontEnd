import React, { useState, useEffect }from 'react'
import { ActivityItem } from "./"
const RoutineItem = ({routine}) => {
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
        </div>
    )
}

export default RoutineItem