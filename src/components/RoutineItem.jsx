import React, { useState, useEffect }from 'react'

const RoutineItem = ({routine}) => {
    return (
        <div>
            {routine.name}
        </div>
    )
}

export default RoutineItem