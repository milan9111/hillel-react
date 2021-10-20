import React from "react";
import style from "./Products.module.css";

class Cost extends React.Component {

    clearPrice = () => {
        this.props.clearPriceForCost();
    }

    render() {
        return(
            <div className={style.boxCost}>
               <button className={style.btnCost} onClick={() => this.clearPrice()}>Clear</button>
               <div className={style.cost}>{`${this.props.cost.toFixed(2)} $`}</div> 
            </div>
            
        );
    }
}

export default Cost;