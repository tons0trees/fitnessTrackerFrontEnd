import react, { useState, useEffect } from "react";
import { getPublicActivities } from "../api";
import { ActivityItem } from "./";
import CreateActivity from "./CreateActivity";


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
          {user ? <CreateActivity /> : null}
          {activitiesList.map((elem) => {
            return <ActivityItem key={"activity_" + elem.id} activity={elem}/>
          })}
        </div>
    )
}

export default ActivityTab;