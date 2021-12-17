import React, { useState, useEffect } from 'react';
import ContextProduct from './contexts/ContextProduct';
import HeaderContainer from './components/HeaderContainer';
import ProductListContainer from './components/ProductListContainer';
import BasketContainer from './components/BasketContainer';
import Error from './components/Error';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { productsAPI } from './api/api';
import { AppProps, ProductsType } from './helpers/interfaces';


const AppContainer = () => {
  const [products, setProducts] = useState<Array<ProductsType>>([]);
  let selectedProductsJSON = localStorage.getItem("productsInBasket");
  const [selectedProducts, setSelectedProducts] = useState<Array<number>>(selectedProductsJSON ? JSON.parse(selectedProductsJSON) : []);
  const [searchProducts, setSearchProducts] = useState<Array<ProductsType>>([]);
  
  useEffect(() => {
    productsAPI.getProducts()
    .then(data => {
      setProducts(data);
    }) 
  }, []);

   
  const addProduct = (event: React.MouseEvent<HTMLButtonElement>):void => {
    setSelectedProducts([...selectedProducts, Number(event.currentTarget.id)]);
  }
  

  const removeProduct = (event: React.MouseEvent<HTMLButtonElement>):void => {
    let productsInBasketJSON = localStorage.getItem("productsInBasket");
    if(productsInBasketJSON) {
       setSelectedProducts(JSON.parse(productsInBasketJSON).filter(
        (item:number) => item !== Number(event.currentTarget.id))
      );
    }
  }

  const removeOneItem = (event: React.MouseEvent<HTMLButtonElement>):void => {
    if (selectedProducts.indexOf(Number(event.currentTarget.id)) > -1) {
      selectedProducts.splice(
        selectedProducts.indexOf(Number(event.currentTarget.id)),
        1
      );
      setSelectedProducts([...selectedProducts])
     }
  }

  const addOneItem = (event: React.MouseEvent<HTMLButtonElement>):void => {
    setSelectedProducts([...selectedProducts, Number(event.currentTarget.id)])
  }

  const onSearchProducts = (event: React.ChangeEvent<HTMLInputElement>):void => {
    let searchArr = products.filter(item => item['title'].toLowerCase().includes(event.target.value.toLowerCase()) ? item : false);
    setSearchProducts(searchArr);
  }

  localStorage.setItem("productsInBasket", JSON.stringify(selectedProducts));

  return(
     <>
        <ContextProduct.Provider value={searchProducts.length > 0 ? searchProducts : products}>
          <App addProduct={addProduct} removeProduct={removeProduct} removeOneItem={removeOneItem} addOneItem={addOneItem}  onSearchProducts={onSearchProducts}  />
        </ContextProduct.Provider>
     </>
  );
}

const App: React.FC<AppProps> = ({ addProduct, removeProduct, removeOneItem, addOneItem, onSearchProducts }) => {
  return(
     <div className="app">
        <Router>
          <HeaderContainer onSearchProducts={onSearchProducts}/>
          <main>
            <Routes>
              <Route path="/" element={<ProductListContainer addProduct={addProduct} />} />
              <Route path="/basket" element={<BasketContainer removeProduct={removeProduct} removeOneItem={removeOneItem} addOneItem={addOneItem} />} />
              <Route path="*" element={<Error />} />
          </Routes>
          </main>
        </Router>
     </div>
  );
}
 

export default AppContainer;
