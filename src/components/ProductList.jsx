import React, { useContext } from "react";
import ContextTranslation from "../contexts/ContextTranslation";
import ContextLang from "../contexts/ContextLang";


const ProductList = ({id, 
                      image, 
                      title, 
                      price, 
                      addProduct, 
                      selectedIdProduct}) => {
    const dataLang = useContext(ContextTranslation);
    const lang = useContext(ContextLang);
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
                 <button id={id} onClick={addProduct}>{lang === 'en' ? dataLang.EN_ADD_TO_CART : dataLang.RU_ADD_TO_CART}</button><span> x {arrThisThing} {lang === 'en' ? dataLang.EN_ITEM : dataLang.RU_ITEM}</span>
             </div>
        </div>
    );
}


export default ProductList;