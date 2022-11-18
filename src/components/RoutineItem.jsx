import React, { useState } from "react";
import { ActivityItem, EditRoutineForm, AddActivityForm } from "./";
import { deleteRoutine } from "../api/Routines";
import { Link } from "react-router-dom";

const RoutineItem = ({ routine, isOwner, list, setList }) => {
  const [readyToEdit, setReadyToEdit] = useState(false);
  const [readyToAddActivity, setReadyToAddActivity] = useState(false);
  const [thisRoutine, setThisRoutine] = useState(routine);

  async function handleDelete(event) {
    event.preventDefault();
    await deleteRoutine({ id: routine.id });
    setThisRoutine(null);
  }

  return (
    <>
      {thisRoutine ? (
        <div className="routine_item">
          <span>
            <h1>{thisRoutine.name}</h1>
            <Link to={`/routines/${thisRoutine.creatorName}`}>{thisRoutine.creatorName}</Link>
          </span>
          <div>
            <p>{thisRoutine.goal}</p>
            <ol>
              {thisRoutine &&
              thisRoutine.activities &&
              thisRoutine.activities.length
                ? thisRoutine.activities.map((elem) => {
                    return (
                      <ActivityItem
                        key={"activity_" + elem.id}
                        activity={elem}
                        isOwner={isOwner}
                        list={list}
                        setList={setList}
                      />
                    );
                  })
                : null}
            </ol>
          </div>
          {isOwner ? (
            <div>
              <button onClick={handleDelete}>DELETE</button>
              <button onClick={() => setReadyToEdit(!readyToEdit)}>EDIT</button>
              <button
                onClick={() => setReadyToAddActivity(!readyToAddActivity)}
              >
                ADD ACTIVITY
              </button>
            </div>
          ) : null}
          {readyToEdit ? (
            <EditRoutineForm
              routine={thisRoutine}
              setRoutine={setThisRoutine}
              setReady={setReadyToEdit}
            />
          ) : null}
          {readyToAddActivity ? (
            <AddActivityForm
              routine={thisRoutine}
              setRoutine={setThisRoutine}
              setReady={setReadyToAddActivity}
            />
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default RoutineItem;
