import react, { useState } from "react";
import { updateRoutineActivity } from "../api/Activities";

const EditActivityForm = ({ activity, setActivity, setReady }) => {
  const [duration, setDuration] = useState(activity.duration);
  const [count, setCount] = useState(activity.count);

  async function handleSubmit(event) {
    event.preventDefault();
    const updatedRoutineActivity = await updateRoutineActivity({
      routineActivityId: activity.routineActivityId,
      count: count,
      duration: duration,
    });
    if (!updatedRoutineActivity.error) {
      const newActivity = { ...activity };
      newActivity.count = updatedRoutineActivity.count;
      newActivity.duration = updatedRoutineActivity.duration;
      setActivity(newActivity);
    }
    setReady(false);
  }

  return (
    <form className="edit_activity_form" onSubmit={handleSubmit}>
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

export default EditActivityForm;
