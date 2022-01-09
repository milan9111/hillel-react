import React from "react";
import Basket from "./Basket";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { addOneItem, removeOneItem, removeProduct } from './../../redux/basketReducer';


const BasketContainer = ({dataProducts, 
                          productsInBasket, 
                          addOneItem, 
                          removeOneItem,
                          removeProduct,
                          translation}) => {
    
    
    const selectedProducts = [];
    let totalSum = 0;

    dataProducts.products?.forEach(element => {
        productsInBasket.productsInBasket?.forEach((item) => {
             if(element.id === item.id) {
                 element.count = item.count;
                 selectedProducts.push(element);
             }
        })
    });

    selectedProducts.forEach((item) => {
        totalSum = totalSum + item.price * item.count
    })

    
    let showProductsInBasket = selectedProducts.map((item) => {
        return <Basket key={item.id}
                       id={item.id}
                       image={item.image}
                       title={item.title}
                       price={item.price * item.count}
                       count={item.count}
                       addOneItem={addOneItem}
                       removeOneItem={removeOneItem}
                       removeProduct={removeProduct}
                />})

    return showProductsInBasket.length > 0 ? (
        <section className="basket">
            <div className="basket__items">
            {showProductsInBasket}
            </div>
            <div className="basket__totalsum">{translation.lang === 'ru' ? translation.dictionary.RU_TOTAL : translation.dictionary.EN_TOTAL}: {totalSum.toFixed(2)} $</div>
            <div className="basket__back">
            <Link to="/">
                <button>{translation.lang === 'ru' ? translation.dictionary.RU_BUTTON_BACK : translation.dictionary.EN_BUTTON_BACK}</button>
            </Link>   
            </div>
        </section>
    ) 
    : 
    (
        <section className="basket-empty">
            <div className="basket-empty__title">
            {translation.lang === 'ru' ? translation.dictionary.RU_NO_PRODUCTS_IN_CART : translation.dictionary.EN_NO_PRODUCTS_IN_CART}
            </div>
            <div className="basket-empty__back">
            <Link to="/">
                <button>{translation.lang === 'ru' ? translation.dictionary.RU_BUTTON_BACK : translation.dictionary.EN_BUTTON_BACK}</button>
            </Link>
            </div>
        </section>
    );
}


const mapStateToProps = (state) => {
    return {
      dataProducts: state.productsPage,  
      productsInBasket: state.basketPage,
      translation: state.translation
    };
};


export default compose(
    connect(mapStateToProps, {addOneItem, removeOneItem, removeProduct})
)(BasketContainer);