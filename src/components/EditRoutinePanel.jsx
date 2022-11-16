import react, { useState } from "react";
import { updateRoutine } from "../api";

const EditRoutinePanel = ({routine}) => {
    const [newName, setNewName] = useState(routine.name)
    const [newGoal, setNewGoal] = useState(routine.goal)
    const [newIsPublic, setNewIsPublic] = useState(routine.isPublic)

    async function handleSubmit(event) {
        event.preventDefault()
        const updatedRoutine = await updateRoutine({
            id: routine.id,
            name: newName,
            goal: newGoal,
            isPublic: newIsPublic
        })
        
        console.log("**** HERE ****", updatedRoutine)
        setNewName('')
        setNewGoal('')
        setNewIsPublic('')
    }

    return (
        <div className="edit_routine_panel">
            <form onSubmit={handleSubmit}>
                <label htmlFor="newName">
                    Name:
                    <input type="text" name="newName" value={newName} onChange={(elem) => setNewName(elem.target.value)}/>
                </label>
                <label htmlFor="newGoal">
                    Goal:
                    <textarea rows="4" cols="50" name="newGoal" value={newGoal} onChange={(elem) => setNewGoal(elem.target.value)}/>
                </label>
                <label htmlFor="newIsPublic">
                    <select defaultValue={newIsPublic} onChange={(elem) => setNewIsPublic(elem.target.value)}>
                        <option value={false}>Private</option>
                        <option value={true}>Public</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditRoutinePanel