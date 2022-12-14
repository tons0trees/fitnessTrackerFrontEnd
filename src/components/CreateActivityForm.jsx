import React, { useState } from "react";
import { postActivity } from "../api/Activities";

const CreateActivityForm = ({ list, setList, setReady }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const newActivity = await postActivity({
      name: name,
      description: description,
    });
    if (newActivity.error) {
      alert(newActivity.message);
    } else {
      const newList = [...list];
      newList.unshift(newActivity);
      setList(newList);
      setReady(false);
    }
    setName("");
    setDescription("");
  }

  return (
    <form className="create_activity_form" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(elem) => setName(elem.target.value)}
        />
      </label>
      <label htmlFor="description">
        Description:
        <textarea
          rows="4"
          cols="50"
          name="description"
          value={description}
          onChange={(elem) => setDescription(elem.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateActivityForm;
