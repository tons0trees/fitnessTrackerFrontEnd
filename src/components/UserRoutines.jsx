import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {RoutineList} from './'
import { getUserRoutines } from "../api/Routines";

const UserRoutines = () => {
    const [myRoutineList, setMyRoutineList] = useState([]);
    const params = useParams()
    
    useEffect(() => {
        console.log(params);
        async function callGetUserRoutines() {
            const list = await getUserRoutines({username: params.user});
            setMyRoutineList(list);
        }
        callGetUserRoutines();
    },[])

    return (
        <div className="user_routines">
            <RoutineList list={myRoutineList}/>
        </div>
    )
}

export default UserRoutines