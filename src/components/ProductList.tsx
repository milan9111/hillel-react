import React from "react";
import { ProductListProps } from "../helpers/interfaces";



const ProductList: React.FC<ProductListProps> = ({id, image, title, price, addProduct, selectedIdProduct}) => {

    let arrThisThingJSON = localStorage.getItem("productsInBasket");
    let arrThisThing = arrThisThingJSON ? JSON.parse(arrThisThingJSON).filter((item:number) => item === id).length : 0;
    
    return(
        <div className="list__item">
             <div className="list__img">
                 <img src={image} alt="product"/>
             </div>
             <div className="list__title">
                  <button id={String(id)} onClick={selectedIdProduct}>{title}</button>
             </div>
             <div className="list__price">
                 {price} $
             </div>
             <div className="list__add">
                 <button id={String(id)} onClick={addProduct}>add to cart</button><span> x {arrThisThing} items</span>
             </div>
        </div>
    );
}


export default ProductList;