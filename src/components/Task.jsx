import React from "react";
import "../css/Task.css";
import Dialog from "./Dialog";
import { CgClose, CgCheck } from "react-icons/cg";
const Task = ({ task, handleTaskComplete, handleTaskDelete }) => {
  const handleTaskCheck = (id) => {
    handleTaskComplete(id);
  };
  const handleTaskDel = (id) => {
    handleTaskDelete(id);
  };

  return (
    <div
      className="task_container"
      style={
        task.complete
          ? { borderLeft: "6px solid chartreuse" }
          : { borderLeft: "none" }
      }
    >
      <div className="task_container-content">
        <div className="task_content-title">{task.title}</div>
        <div className="task_container-link">
          <a href={task.link}>{task.link}</a>
        </div>
      </div>
      <div className="task_container-buttons flex">
        <Dialog task={task} />
        <div
          className="task_container-icon flex"
          onClick={() => handleTaskCheck(task.id)}
        >
          <CgCheck />
        </div>
        <div
          className="task_container-icon flex"
          onClick={() => handleTaskDel(task.id)}
        >
          <CgClose />
        </div>
      </div>
    </div>
  );
};

export default Task;
