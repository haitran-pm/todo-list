import React from "react";

function TaskItem({ task, setTaskStatus, removeTask }) {
  return (
    <li key={task.id} className={task.status ? "done" : ""}>
      <span className="label">{task.title}</span>
      <div className="actions">
        <input
          className="btn-action btn-action-done"
          type="checkbox"
          checked={Boolean(task.status)}
          onChange={(e) => setTaskStatus(task.id, e.target.checked)}
        />
        <button
          className="btn-action btn-action-delete"
          onClick={() => removeTask(task.id)}
        >
          ✖
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
