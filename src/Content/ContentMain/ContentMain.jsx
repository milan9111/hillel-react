import React from "react";
import style from "./ContentMain.module.css";

class ContentMain extends React.Component{
    render() {
        return(
           <div>
            <h1 className={style.title}>
                 {this.props.info[0]}
            </h1>
            <div className={style.date}>
                 {this.props.info[1]}
            </div>
            <div className={style.date}>
                 {this.props.info[2]}
            </div>
            <div className={style.description}>
                 {this.props.info[3]}
            </div>
            <button className={style.btn}>
                 {this.props.info[4]}
            </button>
           </div>
        );
    }
}

export default ContentMain;