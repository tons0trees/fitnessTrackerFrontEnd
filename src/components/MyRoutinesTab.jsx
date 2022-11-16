import react, { useState, useEffect} from "react";
import { RoutineList, CreateRoutineForm } from './'
import { getUserRoutines } from "../api";

const MyRoutinesTab = ({user}) => {
    const [myRoutineList, setMyRoutineList] = useState([])
    const [creating, setCreating] = useState(false)

    useEffect(() => {
        if (user) {
            async function callGetUserRoutines() {
                const list = await getUserRoutines(user.username)
                setMyRoutineList(list)
            }
            callGetUserRoutines()           
        } 
    },[user])

    return (
        <div className="my_routines_tab">
            <button onClick={() => setCreating(!creating)}>Create a New Routine</button>
            {creating ? 
                <CreateRoutineForm list={myRoutineList} setList={setMyRoutineList} setCreating={setCreating}/> 
            : null}
            <RoutineList list={myRoutineList} setList={setMyRoutineList} isOwner={true}/>
        </div>
    )
}

export default MyRoutinesTab