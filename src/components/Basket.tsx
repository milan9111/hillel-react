import React from "react";
import { BasketContainerProps } from "../helpers/interfaces";


interface BasketProps extends BasketContainerProps {
    id: number;
    image: string;
    title: string;
    price: number;
}

const Basket: React.FC<BasketProps> = ({id, image, title, price, removeProduct, removeOneItem, addOneItem}) => {
    let countSelectedItemJSON = localStorage.getItem("productsInBasket");
    let countSelectedItem:number = countSelectedItemJSON ? JSON.parse(countSelectedItemJSON).filter((item:number) => item === id).length : 0;
 
    return(
        <div className="basket__item">
             <div className="basket__img">
                 <img src={image} alt="product" />
             </div>
             <div className="basket__title">
                 {title}
             </div>
             <div className="basket__count">
                 <span className="basket__remove">
                    <button id={String(id)} onClick={removeOneItem}> - </button>  
                 </span>
                 <span className={String(id)} >
                    {countSelectedItem}
                 </span>
                 <span className="basket__add">
                    <button id={String(id)} onClick={addOneItem}> + </button>  
                 </span>
             </div>
             <div className="basket__sum">
                 {(price * countSelectedItem).toFixed(2)} $
             </div>
             <div className="basket__remove-product">
                 <button id={String(id)} onClick={removeProduct}> x </button>
             </div>
        </div>
    );
}


export default Basket;