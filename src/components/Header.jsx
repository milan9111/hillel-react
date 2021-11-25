import React from "react";
import './../styles/styles.css';
import { Link, NavLink } from "react-router-dom";

const Header = ({ countTypesProductsInBasket, onSearchProducts }) => {
    return(
        <header className="header">
             <div className="header__logo">
             <Link to="/">leo shop</Link>
             </div>
             <nav className="header__nav">
                 <ul>
                     <li><NavLink to="/">home</NavLink></li>
                     <li><NavLink to="/">women</NavLink></li>
                     <li><NavLink to="/">men</NavLink></li>
                     <li><NavLink to="/">other</NavLink></li>
                     <li><NavLink to="/">purchase</NavLink></li>
                 </ul>
             </nav>
             <div className="header__search">
                 <input type="search" onChange={onSearchProducts} placeholder='Search...'/>
             </div>
             <div className="header__basket">
                 <div className="header__button"><Link to="/basket"><button><i className="fa fa-shopping-cart" aria-hidden="true"></i></button></Link></div>
                 <div className="header__count">cart ({countTypesProductsInBasket})</div>
             </div>
        </header>
    );
}


export default Header;