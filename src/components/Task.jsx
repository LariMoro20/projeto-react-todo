import React from "react";
import "../css/Task.css";

const Task = ({ task, handleTaskComplete, handleTaskDelete }) => {
  const handleTaskCheck = (id) => {
    handleTaskComplete(id);
  };
  const handleTaskDel = (id) => {
    handleTaskDelete(id);
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
      <div className="task-buttons flex">
        <img
          src={task.icon}
          alt=""
          className="task-icon flex"
          onClick={() => handleTaskCheck(task.id)}
        />
        <img
          alt=""
          className="task-icon flex"
          src="https://findicons.com/files/icons/1262/amora/256/delete.png"
          onClick={() => handleTaskDel(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
