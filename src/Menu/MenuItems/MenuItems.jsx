import React from "react";
import style from "./MenuItems.module.css";

 
class MenuItems extends React.Component {
    
    render() {
        return (
            <div className={style.link}>
                <a href="/#">{this.props.value.name}</a>
            </div>
        )
    }
}

export default MenuItems;