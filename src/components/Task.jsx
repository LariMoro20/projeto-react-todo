import React from 'react'
import '../css/Task.css'

const Task = ({task}) => {
    return (
        <div className="task-container">
            <div className="task-icon">
                <img src={task.icon} alt="" />
            </div>
            <div className="task-content">
                {task.title}
           </div>
            
        </div>
    );
}
 
export default Task;