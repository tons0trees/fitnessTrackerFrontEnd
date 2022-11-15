import react from "react";
import { Link, Outlet } from "react-router-dom";
import {RoutineList} from './'

const MyRoutinesTab = ({user}) => {

    return (
        <div className="my_routines_tab">
            <Link to="create-routine">Create a New Routine</Link>
            <Outlet />
            <RoutineList user={user} />
        </div>
    )
}

export default MyRoutinesTab