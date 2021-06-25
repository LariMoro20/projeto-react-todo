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
            icon: 'https://www.ajetur.com.br/wp-content/uploads/2018/09/sign-check-icon.png',
            complete: false
        },
        {
            id: 2,
            title: 'Estudar vue',
            icon: 'https://www.ajetur.com.br/wp-content/uploads/2018/09/sign-check-icon.png',
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
            <Tasks tasks={tasks} handleTaskComplete={handleTaskComplete} />
            <Footer />
        </div>
    )
};

export default App;