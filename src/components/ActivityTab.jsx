import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPublicActivities } from "../api";
import { ActivityItem } from "./";
import CreateActivity from "./CreateActivityPanel";


const ActivityTab = ({user}) => {
    const [activitiesList, setActivitiesList] = useState([])

    useEffect(() => {
      async function callGetPublicActivities() {
        const list = await getPublicActivities()
        setActivitiesList(list)
      }
      callGetPublicActivities()
    }, [])


    return (
        <div className="activity_tab">
          {user ? <Link to='/create-activity'>Create New Activity</Link> : null}
          {activitiesList.length ? activitiesList.map((elem) => {
            return <ActivityItem key={"activity_" + elem.id} activity={elem}/>
          }) : null}
        </div>
    )
}

export default ActivityTab;