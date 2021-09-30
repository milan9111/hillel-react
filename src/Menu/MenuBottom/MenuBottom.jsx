import React from "react";
import style from "./MenuBottom.module.css";

 
class MenuBottom extends React.Component {
    
    render() {
        return (
            <>
            <span className={style.link}>{this.props.value.name}</span>
            </>
            
        )
    }
}

export default MenuBottom;