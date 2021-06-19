import React from 'react'
import Task from './Task'
import '../css/Task.css'

const Tasks = ({tasks}) => {
    return (
        <div className="tasks_section">
            {tasks.map(task =>
                <Task task={task} key={task.id} />
            )}
        </div>
        )
}

export default Tasks;