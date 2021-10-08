import React from "react";
import style from './Task.module.css';
import CustomInput from "./CustomInput";
import List from "./List";

class Task extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  addTask = (task) => {
    this.setState((state) => {
      let { tasks } = state;
      tasks.push({
        id: tasks.length !== 0 ? tasks.length + 1 : 1,
        title: task,
        done: false,
      });
      return tasks;
    });
  };

  render() {
    let { tasks } = this.state;
    return (
      <div className={style.mainBox}>
        <div className={style.title}>Active tasks:<span>{tasks.length}</span></div>
        <CustomInput addTask={this.addTask} />
        {tasks.map((item) => (<List task={item} key={item.id} />))}
      </div>
    );
  }
}

export default Task;
