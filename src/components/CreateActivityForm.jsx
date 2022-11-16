import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postActivity } from "../api";

const CreateActivityForm = ({ user }) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const nav = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        const newActivity = await postActivity({
            name: name,
            description: description
        })
        setName('')
        setDescription('')
        nav('/activities')
    }


    return (
        <div className="create_activity_panel">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input type="text" name="name" value={name} onChange={(elem) => setName(elem.target.value)}/>
                </label>
                <label htmlFor="description">
                    Description:
                    <input type="text" name="description" value={description} onChange={(elem) => setDescription(elem.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateActivityForm;
