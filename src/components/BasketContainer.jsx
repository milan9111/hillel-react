import React, {useContext} from "react";
import ContextProduct from "../contexts/ContextProduct";
import ContextTranslation from "../contexts/ContextTranslation";
import ContextLang from "../contexts/ContextLang";
import Basket from "./Basket";
import { Link } from "react-router-dom";

const BasketContainer = ({ removeProduct, 
                           removeOneItem, 
                           addOneItem }) => {
    const typesProductsInBasket = Array.from(new Set(JSON.parse(localStorage.getItem("productsInBasket"))));
    const dataProducts = useContext(ContextProduct);
    const dataLang = useContext(ContextTranslation);
    const lang = useContext(ContextLang);
    const productsInBasket = [];
    let totalSum = 0;
    
    
    dataProducts.forEach(element => {
        typesProductsInBasket.forEach((item) => {
            if(element.id === item) {
                productsInBasket.push(element)
            }
        })
    });

    
    productsInBasket.forEach(element => {
        JSON.parse(localStorage.getItem("productsInBasket")).forEach((item) => {
            if(element.id === item) {
                totalSum += element.price
            }
        })
    })

    const showProductsInBasket = productsInBasket.map((item) => <Basket key={item.id}
                                                                        id={item.id}
                                                                        image={item.image}
                                                                        title={item.title}
                                                                        price={item.price}
                                                                        removeProduct={removeProduct}
                                                                        removeOneItem={removeOneItem}
                                                                        addOneItem={addOneItem}
                                                                        />)

    return showProductsInBasket.length > 0 ? (
        <section className="basket">
             <div className="basket__items">
               {showProductsInBasket}
             </div>
             
             <div className="basket__totalsum">{lang === 'en' ? dataLang.EN_TOTAL : dataLang.RU_TOTAL}: {totalSum.toFixed(2)} $</div>
             <div className="basket__back">
                <Link to="/"><button>{lang === 'en' ? dataLang.EN_BUTTON_BACK : dataLang.RU_BUTTON_BACK}</button></Link>   
             </div>
        </section>
    ) : (
        <section className="basket-empty">
          <div className="basket-empty__title">
             {lang === 'en' ? dataLang.EN_NO_PRODUCTS_IN_CART : dataLang.RU_NO_PRODUCTS_IN_CART}
          </div>
          <div className="basket-empty__back">
            <Link to="/">
              <button>{lang === 'en' ? dataLang.EN_BUTTON_BACK : dataLang.RU_BUTTON_BACK}</button>
            </Link>
          </div>
        </section>
      );
    ;
}


export default BasketContainer;