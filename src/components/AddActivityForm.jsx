import react, { useState, useEffect } from "react";
import { getPublicActivities, addActivityToRoutine } from "../api";

const AddActivityForm = ({routine, setReady, list, setList}) => {
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
        const newList = [...list]
        
        const index = newList.findIndex((elem)=>{
            return routine.id === elem.id
        })
        
        const name = activityList.find((elem)=>{
            return  newActivity.activityId === elem.id
        })
        
        const correctlyFormattedActivity = {
            name: name.name,
            description: name.description,
            count: newActivity.count,
            duration: newActivity.duration,
            id: newActivity.activityId,
            routineActivityId: newActivity.id,
            routineId: newActivity.routineId
        }
        
        newList[index].activities.push(correctlyFormattedActivity)
        console.log(newList);
        setList(newList)
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
