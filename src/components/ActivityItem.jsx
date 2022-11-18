import React, { useState } from "react";
import { deleteActivity } from "../api/Activities";
import { EditActivityForm } from "./";

const ActivityItem = ({ activity, isOwner, hideCount }) => {
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
          <p>{thisActivity.description}</p>
          <div>
            {!hideCount ? (
              <p>
                duration: {thisActivity.duration}, count: {thisActivity.count}
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
