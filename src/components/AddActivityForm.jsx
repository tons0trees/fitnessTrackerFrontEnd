import react, { useState, useEffect } from "react";
import { getPublicActivities, addActivityToRoutine } from "../api";

const AddActivityForm = ({routine, setRoutine, setReady}) => {
    const [activityList, setActivityList] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [duration, setDuration] = useState(0);
    const [count, setCount] = useState(0);

    async function handleSubmit(event) {
        event.preventDefault()
        const newActivity = await addActivityToRoutine({
            routineId: routine.id, 
            activityId: selectedActivity, 
            count: count, 
            duration: duration
        })

        const newActivityInfo = activityList.find((elem)=>{
            return  newActivity.activityId === elem.id
        })
        newActivity.routineActivityId = newActivity.id
        newActivity.id = newActivityInfo.id
        newActivity.name = newActivityInfo.name
        newActivity.description = newActivityInfo.description

        const newRoutine = {...routine}
        newRoutine.activities.push(newActivity)
        setRoutine(newRoutine)
        setReady(false)
    }


    useEffect(() => {
        async function callGetPublicActivities() {
            const newList = await getPublicActivities();
            setActivityList(newList);
        }
        callGetPublicActivities();
    }, []);

    return (
        <form className="add_activity_form" onSubmit={handleSubmit}>
            <label htmlFor="activity">
                Activity:
                <select
                    name="activity"
                    defaultValue={selectedActivity}
                    onChange={(elem) => {setSelectedActivity(elem.target.value)}}
                >
                    <option value={null}>--Please choose an activity--</option>
                    {activityList.length
                        ? activityList.map((elem) => (
                              <option key={elem.id} value={elem.id}>
                                  {elem.name}
                              </option>
                          ))
                        : null}
                </select>
            </label>
            <label htmlFor="duration">
                Duration:
                <input
                    type="number"
                    name="duration"
                    value={duration}
                    onChange={(elem) => setDuration(elem.target.value)}
                />
            </label>
            <label htmlFor="count">
                Count:
                <input
                    type="number"
                    name="count"
                    value={count}
                    onChange={(elem) => setCount(elem.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddActivityForm;
