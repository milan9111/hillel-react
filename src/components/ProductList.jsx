import React from "react";


const ProductList = ({id, image, title, price, addProduct, selectedIdProduct}) => {

    let arrThisThing = JSON.parse(localStorage.getItem("productsInBasket")).filter((item) => item === id).length;
    
    return(
        <div className="list__item">
             <div className="list__img">
                 <img src={image} alt="product"/>
             </div>
             <div className="list__title">
                  <button id={id} onClick={selectedIdProduct}>{title}</button>
             </div>
             <div className="list__price">
                 {price} $
             </div>
             <div className="list__add">
                 <button id={id} onClick={addProduct}>add to cart</button><span> x {arrThisThing} items</span>
             </div>
        </div>
    );
}


export default ProductList;