import react, { useState, useEffect } from "react";
import { RoutineList } from "./";
import { getPublicRoutines } from '../api'

const RoutinesTab = () => {
    const [publicList, setPublicList] = useState([])

    useEffect(() => {
        async function callGetPubicRoutines() {
            const list = await getPublicRoutines()
            setPublicList(list)
        }
        callGetPubicRoutines()       
    },[])

    return (
        <div className="routines_tab">
            <RoutineList list={publicList} setList={setPublicList} canDelete={false}/>
        </div>
    )
}

export default RoutinesTab