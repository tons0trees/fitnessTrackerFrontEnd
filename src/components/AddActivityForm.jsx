import react, { useState, useEffect } from "react";
import { getPublicActivities } from "../api";

const AddActivityForm = ({}) => {
    const [activityList, setActivityList] = useState([])

    useEffect(() => {
        async function callGetPublicActivities() {
            const newList = await getPublicActivities()
            setActivityList(newList)
        }
        callGetPublicActivities()
    }, [])


    return(
        <div className="add_activity_form">
            <form>
                <select defaultValue={null}>
                    {activityList.length ? activityList.map((elem)=>{<option value={elem.id}>{elem.name}</option>}) : null}

                </select>
            </form>
        </div>
    )
}

export default AddActivityForm