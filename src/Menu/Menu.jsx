import React from "react";
import style from "./Menu.module.css";
import MenuItems from "./MenuItems/MenuItems";
import MenuBottom from "./MenuBottom/MenuBottom";



class Menu extends React.Component {
    render() {
        const items = [{name: 'Artist'}, {name: 'Concerts'}, {name: 'About Us'}, {name: 'Contact'}];
        const rigth = [{name: 'Copyright'}, {name: 'Yourname'}];
        return (
            <div className={style.container}>
            {items.map((item, index) => 
                <MenuItems key={index} value={item}/>
            )}
                <div className={style.link}>
                {rigth.map((item, index) => 
                    <MenuBottom key={index} value={item}/>
                )}
                </div>
            </div>
        )
    }
}

export default Menu;