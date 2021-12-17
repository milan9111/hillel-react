import React, {useContext} from "react";
import ContextProduct from "../contexts/ContextProduct";
import Basket from "./Basket";
import { ProductsType, BasketContainerProps } from "../helpers/interfaces";
import { Link } from "react-router-dom";



const BasketContainer: React.FC<BasketContainerProps> = ({ removeProduct, removeOneItem, addOneItem }) => {
    const typesProductsInBasketJSON = localStorage.getItem("productsInBasket");
    const typesProductsInBasket:Array<number> = Array.from(new Set(typesProductsInBasketJSON ? JSON.parse(typesProductsInBasketJSON) : []));
    const dataProducts = useContext<Array<ProductsType>>(ContextProduct);
    const productsInBasket:Array<ProductsType> = [];
    let totalSum:number = 0;
    
    dataProducts.forEach(element => {
        typesProductsInBasket.forEach((item) => {
            if(element.id === item) {
                productsInBasket.push(element)
            }
        })
    });

    
    productsInBasket.forEach(element => {
        let productsInBasketJSON = localStorage.getItem("productsInBasket");
        productsInBasketJSON && JSON.parse(productsInBasketJSON).forEach((item:number) => {
            if(element.id === item) {
                totalSum += element.price
            }
        })
    })

    const showProductsInBasket = productsInBasket.map((item) => <Basket key={item.id}
                                                                        id={item.id}
                                                                        image={item.image}
                                                                        title={item.title}
                                                                        price={item.price}
                                                                        removeProduct={removeProduct}
                                                                        removeOneItem={removeOneItem}
                                                                        addOneItem={addOneItem}
                                                                        />)

    return showProductsInBasket.length > 0 ? (
        <section className="basket">
             <div className="basket__items">
               {showProductsInBasket}
             </div>
             
             <div className="basket__totalsum">Total: {totalSum.toFixed(2)} $</div>
             <div className="basket__back">
                <Link to="/"><button>Back</button></Link>   
             </div>
        </section>
    ) : (
        <section className="basket-empty">
          <div className="basket-empty__title">
            There are no products in your cart. Go back and select product...
          </div>
          <div className="basket-empty__back">
            <Link to="/">
              <button>Back</button>
            </Link>
          </div>
        </section>
      );
    ;
}


export default BasketContainer;