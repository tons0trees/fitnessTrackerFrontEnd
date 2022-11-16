import react, { useState, useEffect } from "react";
import { getPublicActivities } from "../api";
import { ActivityItem, CreateActivityForm } from "./";



const ActivityTab = ({user}) => {
    const [activitiesList, setActivitiesList] = useState([])
    const [readyToCreateActivity, setReadyToCreateActivity] = useState(false)

    useEffect(() => {
      async function callGetPublicActivities() {
        const list = await getPublicActivities()
        setActivitiesList(list)
      }
      callGetPublicActivities()
    }, [])


    return (
        <div className="activity_tab">
          {user ? <button onClick={() => setReadyToCreateActivity(!readyToCreateActivity)}>Create a New Activity</button> : null}
          {readyToCreateActivity ? <CreateActivityForm setReady={setReadyToCreateActivity} /> : null}
          {activitiesList.length ? activitiesList.map((elem) => {
            return <ActivityItem key={"activity_" + elem.id} activity={elem}/>
          }) : null}
        </div>
    )
}

export default ActivityTab;