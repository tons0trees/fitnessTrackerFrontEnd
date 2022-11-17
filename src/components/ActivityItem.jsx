import React from "react";
import { deleteActivity } from "../api";

const ActivityItem = ({ activity, isOwner, list, setList }) => {
    async function handleDelete(event) {
        event.preventDefault();
        await deleteActivity(activity);
        const newList = [...list];
        const routine = newList.find((elem) => elem.id === activity.routineId);
        const newActivityList = routine.activities.filter(
            (elem) => activity.id != elem.id
        );
        routine.activities = newActivityList;
        setList(newList);
    }
    return (
        <div className="activity_item">
            <b>{activity.name}</b>
            <p>{activity.description}</p>
            <span>
                {" "}
                duration: {activity.duration}, count: {activity.count}
            </span>
            <div>
                {isOwner ? (
                    <button onClick={handleDelete}>DELETE</button>
                ) : null}
            </div>
        </div>
    );
};

export default ActivityItem;
