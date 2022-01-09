import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { compose } from "redux";
import { onSearchProducts } from './../../redux/productsListReducer';
import { onChangeLangEn, onChangeLangRu } from './../../redux/translationReducer';


const HeaderContainer = ({productsInBasket, 
                          onSearchProducts, 
                          translation, 
                          onChangeLangEn, 
                          onChangeLangRu}) => {

    return(
        <>
           <Header countSelectedProducts={productsInBasket.productsInBasket.length} 
                   onSearchProducts={onSearchProducts}
                   translation={translation}
                   onChangeLangEn={onChangeLangEn}
                   onChangeLangRu={onChangeLangRu}    
                   /> 
        </>
    );
}


const mapStateToProps = (state) => {
    return {
      productsInBasket: state.basketPage,
      translation: state.translation
    };
};


export default compose(
    connect(mapStateToProps, {onSearchProducts, onChangeLangEn, onChangeLangRu})
)(HeaderContainer);