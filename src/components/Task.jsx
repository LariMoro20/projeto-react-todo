import React from "react";
import "../css/Task.css";

const Task = ({ task, handleTaskComplete }) => {
  const handleTaskClick = (id) => {
    handleTaskComplete(id);
  };

  return (
    <div
      className="task-container"
      style={
        task.complete
          ? { borderLeft: "6px solid chartreuse" }
          : { borderLeft: "none" }
      }
    >
      <div className="task-content">{task.title}</div>
      <div
        className="task-icon task-check"
        onClick={() => handleTaskClick(task.id)}
      >
        <img src={task.icon} alt="" />
      </div>
    </div>
  );
};

export default Task;
