import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteActivity } from "../api/Activities";
import { EditActivityForm, EditRoutineActivityForm } from "./";

const ActivityItem = ({ activity, isOwner, inPublic }) => {
    const [thisActivity, setThisActivity] = useState(activity);
    const [readyToEdit, setReadyToEdit] = useState(false);

    async function handleDelete(event) {
        event.preventDefault();
        await deleteActivity(activity);
        setThisActivity(null);
    }
    return (
        <>
            {thisActivity ? (
                <li className="activity_item">
                    <b>{thisActivity.name}</b>
                    <p>
                        <Link to={`/activities/${thisActivity.id}`}>
                            other routines with this activity
                        </Link>
                    </p>
                    <p>{thisActivity.description}</p>
                    <div>
                        {!inPublic ? (
                            <p>
                                duration: {thisActivity.duration}, count:{" "}
                                {thisActivity.count}
                            </p>
                        ) : null}
                        {isOwner ? (
                            <div>
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
                        {readyToEdit && isOwner ? (
                            <EditRoutineActivityForm
                                activity={thisActivity}
                                setActivity={setThisActivity}
                                setReady={setReadyToEdit}
                            />
                        ) : null}
                        {readyToEdit && inPublic ?
                            <EditActivityForm />
                        : null}
                    </div>
                </li>
            ) : null}
        </>
    );
};

export default ActivityItem;
