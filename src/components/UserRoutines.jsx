import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {RoutineList} from './'
import { getUserRoutines } from "../api/Routines";

const UserRoutines = () => {
    const [userRoutineList, setUserRoutineList] = useState([]);
    const params = useParams()
    
    useEffect(() => {
        async function callGetUserRoutines() {
            const list = await getUserRoutines({username: params.user});
            setUserRoutineList(list);
        }
        callGetUserRoutines();
    },[])

    return (
        <div className="user_routines">
            {userRoutineList.length ? <RoutineList list={userRoutineList} setList={setUserRoutineList}/> : null}
        </div>
    )
}

export default UserRoutines