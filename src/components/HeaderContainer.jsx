import React from "react";
import Header from "./Header";



const HeaderContainer = ({ onSearchProducts,
                           changeLangRu, 
                           changeLangEn      }) => {

    const countTypesProductsInBasket = new Set(JSON.parse(localStorage.getItem("productsInBasket"))).size;
    return(
        <div>
            <Header countTypesProductsInBasket={countTypesProductsInBasket} 
                    onSearchProducts={onSearchProducts}
                    changeLangRu={changeLangRu}
                    changeLangEn={changeLangEn}
                    />
        </div>
    );
}


export default HeaderContainer;