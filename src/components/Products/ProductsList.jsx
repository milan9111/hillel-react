import React from "react";


const ProductList = ({id, 
                      image, 
                      title, 
                      price,
                      addToBasket,
                      onOpenModal,
                      translation
                      }) => {
 
    return(
        <div className="list__item">
            <div className="list__img">
                <img src={image} alt="product" onClick={() => onOpenModal(id)}/>
            </div>
            <div className="list__title">
                <button onClick={() => onOpenModal(id)}>{title}</button>
            </div>
            <div className="list__price">
                {price} $
            </div>
            <div className="list__add">
                <button onClick={() => addToBasket(id)}>{translation.lang === 'ru' ? translation.dictionary.RU_ADD_TO_CART : translation.dictionary.EN_ADD_TO_CART}</button>
            </div>
        </div>
    );
}


export default ProductList;