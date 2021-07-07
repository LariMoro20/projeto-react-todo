import React from "react";
import "../css/Task.css";
import { CgClose, CgInfo, CgCheck } from "react-icons/cg";

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
      <div className="task-content">
        {task.title}
        <br /> <a href={task.link}>{task.link}</a>
      </div>
      <div className="task-buttons flex">
        <div className="task-icon flex" onClick={() => handleTaskDel(task.id)}>
          <CgInfo />
        </div>
        <div
          className="task-icon flex"
          onClick={() => handleTaskCheck(task.id)}
        >
          <CgCheck />
        </div>
        <div className="task-icon flex" onClick={() => handleTaskDel(task.id)}>
          <CgClose />
        </div>
      </div>
    </div>
  );
};

export default Task;
