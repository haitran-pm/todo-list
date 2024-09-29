import React from "react";

function AddTaskForm({ newTask, handleInputChange, handleSubmit }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="newitem">Add to the todo list</label>
      <input
        type="text"
        id="newitem"
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="submit">Add item</button>
    </form>
  );
}

export default AddTaskForm;
