import React, { useState } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import './App.css'

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Estudar react',
            description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolorauctor.',
            link: 'https://reactjs.org/',
            complete: false
        },
        {
            id: 2,
            title: 'Estudar vue',
            description: 'DOISPraesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolorauctor.',
            link: 'https://vuejs.org/',
            complete: true
        }
    ]);
    const handleTaskComplete = (taskId) => {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) return { ...task, complete: !task.complete }
            return task;
        })
        setTasks(newTasks);
    }
    const handleTaskDelete = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId)
        setTasks(newTasks);
    }
    const handleTaskAdd = (taskTitle, taskLink, description) => {
        const newTasks = [...tasks, {
            id: tasks.length + 1,
            title: taskTitle,
            description: description,
            link: taskLink,
            complete: false,
        }];
        setTasks(newTasks);
    }

    return (
        <div className="container">
            <div className="task_cover" />
            <AddTask handleTaskAdd={handleTaskAdd} />
            <Tasks tasks={tasks} handleTaskComplete={handleTaskComplete} handleTaskDelete={handleTaskDelete} />
            <Footer />
        </div>
    )
};

export default App;