import react, { useState } from "react";
import { postRoutine } from "../api";
import { useNavigate } from "react-router-dom";

const CreateRoutinePanel = () => {
    const [name, setName] = useState('')
    const [goal, setGoal] = useState('')
    const [isPublic, setIsPublic] = useState(false)
    const nav = useNavigate()
    async function handleSubmit(event) {
        event.preventDefault()
        const newRoutine = await postRoutine({
            name: name,
            goal: goal,
            isPublic: isPublic
        })
        setName('')
        setGoal('')
        setIsPublic(false)
        nav('/myroutines')
        console.log("**** HERE ****", newRoutine)
    }

    return (
        <div className="create_routine_panel">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input type="text" name="name" value={name} onChange={(elem) => setName(elem.target.value)}/>
                </label>
                <label htmlFor="goal">
                    Goal:
                    <input type="text" name="goal" value={goal} onChange={(elem) => setGoal(elem.target.value)}/>
                </label>
                <label htmlFor="isPublic">
                    <select defaultValue={isPublic} onChange={(elem) => setIsPublic(elem.target.value)}>
                        <option value={false}>Private</option>
                        <option value={true}>Public</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateRoutinePanel
