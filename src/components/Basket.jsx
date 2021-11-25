import React from "react";

const Basket = ({id, image, title, price, removeProduct, removeOneItem, addOneItem}) => {
    
    let countSelectedItem = JSON.parse(localStorage.getItem("productsInBasket")).filter((item) => item === id).length;
 
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
                    <button id={id} onClick={removeOneItem}> - </button>  
                 </span>
                 <span className={id} >
                    {countSelectedItem}
                 </span>
                 <span className="basket__add">
                    <button id={id} onClick={addOneItem}> + </button>  
                 </span>
             </div>
             <div className="basket__sum">
                 {(price * countSelectedItem).toFixed(2)} $
             </div>
             <div className="basket__remove-product">
                 <button id={id} onClick={removeProduct}> x </button>
             </div>
        </div>
    );
}


export default Basket;