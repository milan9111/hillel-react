import React, {useState, useEffect} from "react";
import { productsAPI } from "../api/api";
import loader from "./../source/images/loader.gif";


const ProductDetails = ({idProduct}) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        productsAPI.getOneProduct(idProduct)
        .then(data => {
            setProduct(data);
        }) 
      }, [idProduct]);

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