import React from "react";
import { Link, NavLink } from "react-router-dom";


const Header = ({countSelectedProducts, 
                 onSearchProducts, 
                 translation, 
                 onChangeLangEn, 
                 onChangeLangRu}) => {

    return(
        <>
            <header className="header">
             <div className="header__logo">
             <Link to="/">leo shop</Link>
             </div>
             <nav className="header__nav">
                 <ul>
                     <li><NavLink to="/">{translation.lang === 'ru' ? translation.dictionary.RU_HOME : translation.dictionary.EN_HOME}</NavLink></li>
                     <li><NavLink to="/">{translation.lang === 'ru' ? translation.dictionary.RU_WOMEN : translation.dictionary.EN_WOMEN}</NavLink></li>
                     <li><NavLink to="/">{translation.lang === 'ru' ? translation.dictionary.RU_MEN : translation.dictionary.EN_MEN}</NavLink></li>
                     <li><NavLink to="/">{translation.lang === 'ru' ? translation.dictionary.RU_OTHER : translation.dictionary.EN_OTHER}</NavLink></li>
                     <li><NavLink to="/">{translation.lang === 'ru' ? translation.dictionary.RU_PURCHASE : translation.dictionary.EN_PURCHASE}</NavLink></li>
                 </ul>
             </nav>
             <div className="header__languagesBox">
                 <button className="header__english" onClick={onChangeLangEn} >En</button>
                 <button className="header__russian" onClick={onChangeLangRu}>Ru</button>
             </div>
             <div className="header__search">
                 <input type="search" placeholder={translation.lang === 'ru' ? translation.dictionary.RU_SEARCH : translation.dictionary.EN_SEARCH} onInput={onSearchProducts}/>
             </div>
             <div className="header__basket">
                 <div className="header__button"><Link to="/basket"><button><i className="fa fa-shopping-cart" aria-hidden="true"></i></button></Link></div>
                 <div className="header__count">{translation.lang === 'ru' ? translation.dictionary.RU_CART : translation.dictionary.EN_CART} {countSelectedProducts}</div>
             </div>
        </header>
        </>
    );
}


export default Header;