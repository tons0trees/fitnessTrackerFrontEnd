import React, { useState, useEffect } from 'react'
import { RoutineItem } from './'
import { getUserRoutines, getPublicRoutines } from '../api'

const RoutineList = ({list, setList, isOwner}) => {
    
    return (
        <div className='routine_list'>
            {list && list.length ? list.map((elem) => {
                return <RoutineItem key={"routine_" + elem.id} routine={elem} isOwner={isOwner} list={list} setList={setList}/>
            }) : null}
        </div>
    )
}

export default RoutineList