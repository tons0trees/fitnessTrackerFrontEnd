import React, { useState } from "react";
import { postActivity } from "../api";

const CreateActivityForm = ({ setReady }) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()
        const newActivity = await postActivity({
            name: name,
            description: description
        })
        setName('')
        setDescription('')
        setReady(false)
    }


    return (
        <form className="create_activity_form" onSubmit={handleSubmit}>
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
    );
};

export default CreateActivityForm;
