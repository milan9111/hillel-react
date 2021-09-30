import React from "react";
import style from "./Content.module.css";
import ContentMain from "./ContentMain/ContentMain";
import ContentAdd from "./ContentAdd/ContentAdd";

class Content extends React.Component {
    render() {
        const mainContent = ['Feel The Music', 
                            '16 /17 /18 - October',
                            '17:00h - Online Event', 
                            'Book or buy your ticket on this website now', 
                            'Shop Now'];
        const addContent = ['*Lorem ipsum dolor sit amet consectetur adipisicing elit.'];
    return(
        <div className={style.container}>
            <div className={style.box}>
                <ContentMain info={mainContent} />
            </div>
            <ContentAdd info={addContent} />
        </div>
        );
    }
}

export default Content; 


















