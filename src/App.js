import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProductsListContainer from './components/Products/ProductsListContainer';
import BasketContainer from './components/Basket/BasketContainer';
import Error from './components/Error/Error';
import './styles/styles.css';

const App = () => {
  

  return (
    <div>
        <Router>
          <HeaderContainer />
            <Routes>
              <Route
                path="/"
                element={<ProductsListContainer />}
              />
              <Route
                path="/basket"
                element={<BasketContainer />}
              />
              <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </div>
  );
}

 

export default App;
