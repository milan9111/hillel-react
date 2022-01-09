import React from "react";
import loader from "./../../source/images/loader.gif";


const ProductDetails = ({product}) => {
    return product ? (
        <div>
            <div className="details__image">
            <img src={product.image} alt="product" />
            </div>
            <div className="details__title">
                {product.title}
            </div>
            <div className="details__description">
                {product.description}
            </div>
            <div className="details__price">
                {product.price} $
            </div>
        </div>
        
    ) : (
        <div className="details__loader">
            <img src={loader} alt="loading..."/>
        </div>
    );
}


export default ProductDetails;