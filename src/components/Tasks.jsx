import React from "react";
import Task from "./Task";
import "../css/Task.css";

const Tasks = ({ tasks, handleTaskComplete, handleTaskDelete }) => {
  return (
    <div className="tasks_section">
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          handleTaskComplete={handleTaskComplete}
          handleTaskDelete={handleTaskDelete}
        />
      ))}
    </div>
  );
};

export default Tasks;
