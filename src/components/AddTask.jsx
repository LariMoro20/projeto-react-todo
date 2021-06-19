import React, { useState } from 'react';
const AddTask = ({ handleTaskAdd }) => {
    const [inputData, setInputData] = useState('')

    const onChangeValue = (e) => {
        console.log(e.target.value)
        setInputData(e.target.value)
    }
    const handleTaskAddClick = () => {
        handleTaskAdd(inputData)
    }
    return (
        <div className="task_add-container">
            <input onChange={onChangeValue} value={inputData} className="task_add-container-input" type="text" />
            <button onClick={handleTaskAddClick} className="task_add-container-button">Adicionar</button>
        </div>
     );
}
 
export default AddTask;