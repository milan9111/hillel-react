import React from "react";
import { HeaderContainerProps } from "../helpers/interfaces";
import Header from "./Header";



const HeaderContainer: React.FC<HeaderContainerProps> = ({ onSearchProducts }) => {

    const countTypesProductsInBasketJSON = localStorage.getItem("productsInBasket");
    const countTypesProductsInBasket:number = new Set(countTypesProductsInBasketJSON ? JSON.parse(countTypesProductsInBasketJSON) : []).size;
    return(
        <div>
            <Header countTypesProductsInBasket={countTypesProductsInBasket} onSearchProducts={onSearchProducts}/>
        </div>
    );
}


export default HeaderContainer;