import React from "react";
import Header from "./Header";


const HeaderContainer = ({ onSearchProducts }) => {

    const countTypesProductsInBasket = new Set(JSON.parse(localStorage.getItem("productsInBasket"))).size;
    return(
        <div>
            <Header countTypesProductsInBasket={countTypesProductsInBasket} onSearchProducts={onSearchProducts}/>
        </div>
    );
}


export default HeaderContainer;