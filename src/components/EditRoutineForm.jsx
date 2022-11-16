import react, { useState } from "react";
import { updateRoutine } from "../api";

const EditRoutineForm = ({ routine, list, setList, setReady }) => {
    const [newName, setNewName] = useState(routine.name);
    const [newGoal, setNewGoal] = useState(routine.goal);
    const [newIsPublic, setNewIsPublic] = useState(routine.isPublic);

    async function handleSubmit(event) {
        event.preventDefault();
        const updatedRoutine = await updateRoutine({
            id: routine.id,
            name: newName,
            goal: newGoal,
            isPublic: newIsPublic,
        });
        const newList = list.filter((elem) => elem.id != routine.id);
        newList.unshift(updatedRoutine);
        setList(newList);
        setReady(false);
    }

    return (
        <form className="edit_routine_panel" onSubmit={handleSubmit}>
            <label htmlFor="newName">
                Name:
                <input
                    name="newName"
                    type="text"
                    value={newName}
                    onChange={(elem) => setNewName(elem.target.value)}
                />
            </label>
            <label htmlFor="newGoal">
                Goal:
                <textarea
                    name="newGoal"
                    rows="4"
                    cols="50"
                    value={newGoal}
                    onChange={(elem) => setNewGoal(elem.target.value)}
                />
            </label>
            <label htmlFor="newIsPublic">
                <select
                    name="newIsPublic"
                    defaultValue={newIsPublic}
                    onChange={(elem) => setNewIsPublic(elem.target.value)}
                >
                    <option value={false}>Private</option>
                    <option value={true}>Public</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default EditRoutineForm;
