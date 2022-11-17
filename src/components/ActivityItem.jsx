import React, { useState } from "react";
import { deleteActivity } from "../api";
import { EditActivityForm } from "./";

const ActivityItem = ({ activity, isOwner }) => {
    const [thisActivity, setThisActivity] = useState(activity);
    const [readyToEdit, setReadyToEdit] = useState(false);

    async function handleDelete(event) {
        event.preventDefault();
        await deleteActivity(activity);
        setThisActivity(null)
    }
    return (
        <>
            {thisActivity ? (
                <li className="activity_item">
                    <b>{thisActivity.name}</b>
                    <p>{thisActivity.description}</p>
                    <div>
                        {isOwner ? (
                            <div>
                                <p>
                                    duration: {thisActivity.duration}, count: {thisActivity.count}
                                </p>
                                <button onClick={handleDelete}>DELETE</button>
                                <button
                                    onClick={() => {
                                        setReadyToEdit(!readyToEdit);
                                    }}
                                >
                                    EDIT
                                </button>
                            </div>
                        ) : null}
                        {readyToEdit ? (
                            <EditActivityForm
                                activity={thisActivity}
                                setActivity={setThisActivity}
                                setReady={setReadyToEdit}
                            />
                        ) : null}
                    </div>
                </li>
            ) : null}
        </>
    );
};

export default ActivityItem;
