import React, { useContext } from "react";
import './../styles/styles.css';
import { Link, NavLink } from "react-router-dom";
import ContextTranslation from "../contexts/ContextTranslation";
import ContextLang from "../contexts/ContextLang";

const Header = ({ countTypesProductsInBasket, 
                  onSearchProducts,
                  changeLangRu,
                  changeLangEn }) => {

    const dataLang = useContext(ContextTranslation);
    const lang = useContext(ContextLang);

    return(
        <header className="header">
             <div className="header__logo">
             <Link to="/">leo shop</Link>
             </div>
             <nav className="header__nav">
                 <ul>
                     <li><NavLink to="/">{lang === 'en' ? dataLang.EN_HOME : dataLang.RU_HOME}</NavLink></li>
                     <li><NavLink to="/">{lang === 'en' ? dataLang.EN_WOMEN : dataLang.RU_WOMEN}</NavLink></li>
                     <li><NavLink to="/">{lang === 'en' ? dataLang.EN_MEN : dataLang.RU_MEN}</NavLink></li>
                     <li><NavLink to="/">{lang === 'en' ? dataLang.EN_OTHER : dataLang.RU_OTHER}</NavLink></li>
                     <li><NavLink to="/">{lang === 'en' ? dataLang.EN_PURCHASE : dataLang.RU_PURCHASE}</NavLink></li>
                 </ul>
             </nav>
             <div className="header__languagesBox">
                 <button className="header__english" onClick={changeLangEn}>En</button>
                 <button className="header__russian" onClick={changeLangRu}>Ru</button>
             </div>
             <div className="header__search">
                 <input type="search" onChange={onSearchProducts} placeholder={lang === 'en' ? dataLang.EN_SEARCH : dataLang.RU_SEARCH}/>
             </div>
             <div className="header__basket">
                 <div className="header__button"><Link to="/basket"><button><i className="fa fa-shopping-cart" aria-hidden="true"></i></button></Link></div>
                 <div className="header__count">{lang === 'en' ? dataLang.EN_CART : dataLang.RU_CART} ({countTypesProductsInBasket})</div>
             </div>
        </header>
    );
}


export default Header;