import React from "react";
import "../css/Task.css";
import Dialog from "./Dialog";
import Button from "@material-ui/core/Button";
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
        <Button
          variant="outlined"
          className="task_container-icon button-check flex"
          onClick={() => handleTaskCheck(task.id)}
        >
          <CgCheck />
        </Button>

        <Button
          variant="outlined"
          className="task_container-icon button-danger flex"
          onClick={() => handleTaskDel(task.id)}
        >
          <CgClose />
        </Button>
      </div>
    </div>
  );
};

export default Task;
