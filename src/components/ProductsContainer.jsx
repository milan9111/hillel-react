import React from "react";
import { productsAPI } from "../api/api";
import Cost from "./Cost";
import Products from "./Products";
import style from "./Products.module.css";



class ProductsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cost: 0,
        }
    }

    componentDidMount() {
      productsAPI.getProducts()
        .then(data => {
            this.setState({
                products: [...data]
            });
        });
    }
    
    addPriceForCost = (price) => {
        let { cost } = this.state;
        this.setState({
            cost: cost += price,
        });
    }

    clearPriceForCost = () => {
        this.setState({
            cost: 0
        });
    }
    
    render() {
       let productsElements = (this.state.products).map((item, index) => 
                              <Products key={index} title={item.title} price={item.price}
                               img={item.image} addPriceForCost={this.addPriceForCost}
                              />);
       return (
            <div className={style.container}>
                <div className={style.containerCost}>
                    <Cost cost={this.state.cost} clearPriceForCost={this.clearPriceForCost}/>
                </div>
                { productsElements }
            </div>
        );
    }
}


export default ProductsContainer;