import react, { useState } from "react";
import { postRoutine } from "../api";

const CreateRoutinePanel = ({list, setList, setCreating}) => {
    const [name, setName] = useState('')
    const [goal, setGoal] = useState('')
    const [isPublic, setIsPublic] = useState(false)

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

        const newList = [...list]
        newList.push(newRoutine)
        setList(newList)
        setCreating(false)
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
                    <textarea rows="4" cols="50" name="goal" value={goal} onChange={(elem) => setGoal(elem.target.value)}/>
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
