import React from "react";

const Task = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTask(task.id)}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button className="complete-button" onClick={() => toggleTask(task.id)}>
        {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
      </button>
    </div>
  );
};

export default Task;
