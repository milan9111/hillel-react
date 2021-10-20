import React from "react";
import style from "./Products.module.css";
 
class Products extends React.Component {
     
    addPrice = (price) => {
        this.props.addPriceForCost(price);
    }

    render() {
       return (
       <div className={style.productsContainer}>
            <div>
                <img className={style.image} src={this.props.img} alt="products"/>
            </div>
            <div className={style.title}>
                {this.props.title}
            </div>
            <div className={style.price}>
                {`${this.props.price} $`}
            </div>
            <div className={style.btnBox}>
                <button className={style.btn} onClick={() => this.addPrice(this.props.price)} value={this.props.price}>Buy</button>
            </div>
        </div>
         
        );
    }

}


export default Products;