import React from "react";
import Task from "./Task";
import { Link } from "react-router-dom";

const List = ({
  userName,
  activeModal,
  tasks,
  getCompleted,
  onRemoveTask,
  setActiveModal,
  textTask,
  setTextTask,
  onSetTextTask,
  addTextTask,
}) => {
  let tasksList;
  if (tasks !== null) {
    tasksList = tasks.map((item, index) => (
      <div key={item.id} className={item.id + " list__content"}>
        <div className="list__count">{index + 1}.</div>
        <div
          className="list__text"
          id={`list__text${item.id}`}
          style={
            item.check
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {item.text}
        </div>
        <div
          className="list__remove"
          id={item.id}
          onClick={onRemoveTask}
          style={
            item.check ? { visibility: "hidden" } : { visibility: "visible" }
          }
        >
          &#10060;
        </div>
        <div className="list__check">
          <input
            type="checkbox"
            id={item.id}
            onClick={getCompleted}
            defaultChecked={item.check}
          />
        </div>
      </div>
    ));
  }

  return (
    <section className="list">
      <h3 className="list__user">
        Пользователь: {userName ? userName : "Гость"}
      </h3>

      {activeModal ? null : (
        <div>
          {tasksList?.length > 0 ? (
            tasksList
          ) : (
            <div className="list__empty">У Вас нет задач...</div>
          )}
          {userName ? (
            <div className="list__addTasks">
              <button onClick={() => setActiveModal(true)}>
                Добавить задачу
              </button>
            </div>
          ) : (
            <button disabled>Добавить задачу</button>
          )}
        </div>
      )}

      {activeModal ? (
        <div>
          <Task
            setActiveModal={setActiveModal}
            userName={userName}
            textTask={textTask}
            setTextTask={setTextTask}
            onSetTextTask={onSetTextTask}
            addTextTask={addTextTask}
          />
        </div>
      ) : null}

      <div className="list__changeUser">
        <Link to="/">
          <button>Сменить пользователя</button>
        </Link>
      </div>
    </section>
  );
};

export default List;
