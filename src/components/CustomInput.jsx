import React from "react";
import style from "./CustomInput.module.css";

class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  addTask() {
    const { input } = this.state;
    if (input) {
      this.props.addTask(input);
      this.setState({ input: "" });
    }
  }
  inputChange(e) {
    this.setState({
      input: e.target.value,
    });
  }
  render() {
    const { input } = this.state;
    return (
      <div className={style.inputBox}>
        <input className={style.input}
          type="text"
          placeholder={"write a new task"}
          value={input}
          onChange={(e) => this.inputChange(e)}
        />
        <button className={style.btn} onClick={() => this.addTask()}>send</button>
      </div>
    );
  }
}

export default CustomInput;
