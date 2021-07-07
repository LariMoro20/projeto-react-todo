import React, { useState } from "react";
const AddTask = ({ handleTaskAdd }) => {
  const [inputTitle, setInpuTitle] = useState("");
  const [inputLink, setInpuLink] = useState("");

  const onChangeValueTitle = (e) => {
    setInpuTitle(e.target.value);
  };
  const onChangeValueLink = (e) => {
    setInpuLink(e.target.value);
  };
  const handleTaskAddClick = () => {
    handleTaskAdd(inputTitle, inputLink);
  };
  return (
    <div className="task_add-container">
      <div className="task_add-container_itens">
        <input
          onChange={onChangeValueTitle}
          value={inputTitle}
          className="task_add-container-input"
          type="text"
          placeholder="Titulo"
        />
        <input
          onChange={onChangeValueLink}
          value={inputLink}
          className="task_add-container-input"
          placeholder="Link"
          type="text"
        />
      </div>
      <button
        onClick={handleTaskAddClick}
        className="task_add-container-button"
      >
        Adicionar
      </button>
    </div>
  );
};

export default AddTask;
