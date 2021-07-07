import React, { useState } from "react";
const AddTask = ({ handleTaskAdd }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputLink, setInputLink] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const onChangeValueTitle = (e) => {
    setInputTitle(e.target.value);
  };
  const onChangeValueLink = (e) => {
    setInputLink(e.target.value);
  };
  const onChangeValueDesc = (e) => {
    setInputDesc(e.target.value);
  };
  const handleTaskAddClick = () => {
    handleTaskAdd(inputTitle, inputLink, inputDesc);
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
      <div className="task_add-container_itens">
        <textarea
          onChange={onChangeValueDesc}
          value={inputDesc}
          className="task_add-container-textarea"
          placeholder="Descrição"
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
