import React, { useState } from "react";
import "./../styles/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Auth from "./Auth";
import List from "./List";

const ContainerToDo = () => {
  const [userName, setUserName] = useState("");
  const [activeModal, setActiveModal] = useState(false);
  const tasks = JSON.parse(localStorage.getItem(`${userName}`));
  const [textTask, setTextTask] = useState(null);

  const onNameUser = (event) => {
    if (event.target.value.trim().length > 0) {
      setUserName(event.target.value.trim());
    }
  };

  const addUser = () => {
    if (localStorage.getItem(`${userName}`) === null) {
      localStorage.setItem(`${userName}`, JSON.stringify([]));
    }
  };

  const getCompleted = (event) => {
    let removeTask = document.getElementById(`${event.target.id}`);
    let textTask = document.getElementById(`list__text${event.target.id}`);
    if (event.target.checked) {
      textTask.style.textDecoration = "line-through";
      removeTask.style.visibility = "hidden";
      let arrTasks = JSON.parse(localStorage.getItem(`${userName}`));
      let taskInArr = arrTasks.find((item) => item.id === event.target.id);
      taskInArr.check = true;
      localStorage.setItem(`${userName}`, JSON.stringify(arrTasks));
    } else {
      textTask.style.textDecoration = "none";
      removeTask.style.visibility = "visible";
      let arrTasks = JSON.parse(localStorage.getItem(`${userName}`));
      let taskInArr = arrTasks.find((item) => item.id === event.target.id);
      taskInArr.check = false;
      localStorage.setItem(`${userName}`, JSON.stringify(arrTasks));
    }
  };

  const addTextTask = () => {
    let newTask = {};
    newTask.id = randomId();
    newTask.text = textTask;
    newTask.check = false;
    let arrTask = JSON.parse(localStorage.getItem(`${userName}`));
    arrTask.push(newTask);
    localStorage.setItem(`${userName}`, JSON.stringify(arrTask));
    setActiveModal(false);
  };

  const randomId = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        let r = (Math.random() * 16) | 0;
        let v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };

  const onSetTextTask = (event) => {
    if (event.target.value.trim().length > 0) {
      setTextTask(event.target.value.trim());
    }
  };

  const onRemoveTask = (event) => {
    let arrTasks = JSON.parse(localStorage.getItem(`${userName}`));
    let newArrTasks = arrTasks.filter((item) => item.id !== event.target.id);
    localStorage.setItem(`${userName}`, JSON.stringify(newArrTasks));
    let removeItem = document.getElementsByClassName(event.target.id);
    removeItem[0].style.display = "none";
  };

  return (
    <div className="container">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Auth
                  onNameUser={onNameUser}
                  addUser={addUser}
                  userName={userName}
                />
              }
            />
            <Route
              path="/list"
              element={
                <List
                  userName={userName}
                  getCompleted={getCompleted}
                  onRemoveTask={onRemoveTask}
                  setActiveModal={setActiveModal}
                  activeModal={activeModal}
                  tasks={tasks}
                  textTask={textTask}
                  setTextTask={setTextTask}
                  onSetTextTask={onSetTextTask}
                  addTextTask={addTextTask}
                />
              }
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default ContainerToDo;
