import React, { useState } from 'react'
import Tasks from './components/Tasks'
import './App.css'
import AddTask from './components/AddTask'
const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Estudar react',
            icon: 'https://cdn.pixabay.com/photo/2017/04/06/09/16/arrow-2207748_1280.png',
            complete: false
        },
        {
            id: 2,
            title: 'Estudar vue',
            icon: 'https://cdn.pixabay.com/photo/2017/04/06/09/16/arrow-2207748_1280.png',
            complete: true
        }
    ]);
    const handleTaskAdd = (taskTitle) => {
        const newTasks = [...tasks, {
            title: taskTitle,
            id: tasks.length + 1,
            complete: false,
            icon: 'https://cdn.pixabay.com/photo/2017/04/06/09/16/arrow-2207748_1280.png'
        }];
        setTasks(newTasks);
    }

    return (
        <div className="container">
            <div className="task-cover" />
            <AddTask handleTaskAdd={handleTaskAdd} />
            <Tasks tasks={tasks} />
        </div>
    )
};

export default App;