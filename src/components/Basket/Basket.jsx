import React from "react";


const Basket = ({id, 
                 image, 
                 title, 
                 price, 
                 count, 
                 addOneItem, 
                 removeOneItem, 
                 removeProduct}) => {
     
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
                    <button onClick={() => removeOneItem(id)}> - </button>  
                 </span>
                 <span>
                    {count}
                 </span>
                 <span className="basket__add">
                    <button onClick={() => addOneItem(id)}> + </button>  
                 </span>
             </div>
             <div className="basket__sum">
                 {price.toFixed(2)} $
             </div>
             <div className="basket__remove-product">
                 <button><i className="fa fa-times" aria-hidden="true" onClick={() => removeProduct(id)}></i></button>
             </div>
        </div>
    );
}

export default Basket;