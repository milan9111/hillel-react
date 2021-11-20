import React from "react";

const Task = ({ setActiveModal, textTask, onSetTextTask, addTextTask }) => {
  return (
    <section className="task">
      <div className="task__input">
        <input type="text" onChange={onSetTextTask} />
      </div>
      <div className="task__buttons">
        <div className="task__addButton">
          {textTask && textTask.length > 1 ? (
            <button onClick={addTextTask}>Добавить</button>
          ) : (
            <button disabled>Добавить</button>
          )}
        </div>
        <div className="task__closeButton">
          <button onClick={() => setActiveModal(false)}>Отмена</button>
        </div>
      </div>
    </section>
  );
};

export default Task;
