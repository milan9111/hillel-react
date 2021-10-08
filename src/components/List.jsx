import React from "react";
import style from "./List.module.css";

class List extends React.Component {
  render() {
    let { title, id, done} = this.props.task;
    console.log(done);
    return (
        <div className={style.listBox}>
            <div className={style.id}>{id}.</div>
                <div className={style.list}>
                        <div className={style.title}>{title}</div>
                </div>
            <button className={style.result}><span>{done === false ? ':(' : ':)'}</span></button>
        </div>
    );
  }
}

export default List;
