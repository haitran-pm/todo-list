import React from "react";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  showIncomplete,
  setTaskStatus,
  removeTask,
  setShowIncomplete,
}) {
  return (
    <>
      <ul className="task-list">
        {tasks
          // Phép lọc các task mà arrow function trả về true.
          // Nếu showIncomplete === true, thì trả về true khi task.status khác 1,
          // sau khi filter thì sẽ bỏ các task có status là 1.
          // Nếu showIncomplete === false, thì arrow function luôn là true,
          // nghĩa là trả về tất cả task sau khi filter.
          .filter((task) => (showIncomplete ? task.status !== true : true))
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              setTaskStatus={setTaskStatus}
              removeTask={removeTask}
            />
          ))}
      </ul>
      <div className="togglebutton-wrapper">
        <label htmlFor="filter" className="togglebutton-label">
          Show incompleted tasks only
        </label>
        <input
          id="filter"
          type="checkbox"
          checked={showIncomplete}
          onChange={(e) => setShowIncomplete(e.target.checked)}
        />
      </div>
    </>
  );
}

export default TaskList;
