import React from "react";
import style from "./Header.module.css";
import logo from "../Images/logo.png"



class Header extends React.Component {
    render() {
      return(
        <>  
            <div className={style.container}>
                <div>
                    <a href="/#"><img src={logo} alt="logo" /></a>
                </div>
            </div>
           
        </>
      )
    }
}


export default Header;
