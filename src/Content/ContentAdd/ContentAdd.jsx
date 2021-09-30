import React from "react";
import style from "./ContentAdd.module.css";

class ContentAdd extends React.Component{
    render() {
        return(
           <>
             <p className={style.legal}>{this.props.info[0]}</p>
           </>
        );
    }
}

export default ContentAdd;