import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {RoutineList} from './'
import { getUserRoutines } from "../api/Routines";

const UserRoutines = () => {
    const [myRoutineList, setMyRoutineList] = useState([]);
    const params = useParams()
    
    useEffect(() => {
        async function callGetUserRoutines() {
            const list = await getUserRoutines({username: params.user});
            setMyRoutineList(list);
        }
        callGetUserRoutines();
    },[])

    return (
        <div className="user_routines">
            {myRoutineList.length ? <RoutineList list={myRoutineList}/> : null}
        </div>
    )
}

export default UserRoutines