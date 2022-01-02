import React, { useState, useEffect } from 'react';
import ContextProduct from './contexts/ContextProduct';
import ContextTranslation from './contexts/ContextTranslation';
import ContextLang from './contexts/ContextLang';
import HeaderContainer from './components/HeaderContainer';
import ProductListContainer from './components/ProductListContainer';
import BasketContainer from './components/BasketContainer';
import Error from './components/Error';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { productsAPI } from './api/api';
import TRANSLATION from './helpers/languages';



const AppContainer = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(JSON.parse(localStorage.getItem("productsInBasket")) || []);
  const [searchProducts, setSearchProducts] = useState([]);
  const [lang, setLang] = useState('en');
  
  useEffect(() => {
    productsAPI.getProducts()
    .then(data => {
      setProducts(data);
    }) 
  }, []);

  
  const changeLangRu = () => {
    setLang('ru');
  }
  const changeLangEn = () => {
    setLang('en');
  }

  const addProduct = (event) => {
    setSelectedProducts([...selectedProducts, Number(event.target.id)]);
  }
  

  const removeProduct = (event) => {
    setSelectedProducts(JSON.parse(localStorage.getItem("productsInBasket")).filter(
        (item) => item !== Number(event.target.id))
    );
  }

  const removeOneItem = (event) => {
    if (selectedProducts.indexOf(Number(event.target.id)) > -1) {
      selectedProducts.splice(
        selectedProducts.indexOf(Number(event.target.id)),
        1
      );
      setSelectedProducts([...selectedProducts])
     }
  }

  const addOneItem = (event) => {
    setSelectedProducts([...selectedProducts, Number(event.target.id)])
  }

  const onSearchProducts = (event) => {
    let searchArr = products.filter(item => item['title'].toLowerCase().includes(event.target.value.toLowerCase()) ? item : false);
    setSearchProducts(searchArr);
  }

  localStorage.setItem("productsInBasket", JSON.stringify(selectedProducts));

  return(
     <>
        <ContextProduct.Provider value={searchProducts.length > 0 ? searchProducts : products}>
          <ContextTranslation.Provider value={TRANSLATION}>
            <ContextLang.Provider value={lang}>
            <App addProduct={addProduct} 
                 removeProduct={removeProduct} 
                 removeOneItem={removeOneItem} 
                 addOneItem={addOneItem} 
                 selectedProducts={selectedProducts} 
                 onSearchProducts={onSearchProducts}
                 changeLangRu={changeLangRu}
                 changeLangEn={changeLangEn}  
                 />
            </ContextLang.Provider>
          </ContextTranslation.Provider>
        </ContextProduct.Provider>
     </>
  );
}

const App = ({ addProduct, 
               removeProduct, 
               removeOneItem, 
               addOneItem, 
               selectedProducts, 
               onSearchProducts,
               changeLangRu,
               changeLangEn }) => {
  return(
     <div className="app">
        <Router>
          <HeaderContainer onSearchProducts={onSearchProducts} 
                           changeLangRu={changeLangRu} 
                           changeLangEn={changeLangEn}/>
          <main>
            <Routes>
              <Route path="/" element={<ProductListContainer addProduct={addProduct} />} />
              <Route path="/basket" element={<BasketContainer removeProduct={removeProduct} 
                                                              removeOneItem={removeOneItem} 
                                                              addOneItem={addOneItem} 
                                                              selectedProducts={selectedProducts} />} />
              <Route path="*" element={<Error />} />
          </Routes>
          </main>
        </Router>
     </div>
  );
}
 

export default AppContainer;
