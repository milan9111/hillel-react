import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import { connect } from "react-redux";
import { compose } from "redux";
import { requestProducts, changeModal, onOpenModal } from './../../redux/productsListReducer';
import { addToBasket } from './../../redux/basketReducer';
import loader from './../../source/images/loader.gif';
import CustomModal from "../Modal/CustomModal";
import ProductDetails from "../Modal/ProductDetails";


const ProductsListContainer = ({dataProducts, 
                                requestProducts, 
                                translation, 
                                addToBasket, 
                                changeModal, 
                                onOpenModal}) => {
    let [dataListItems, setDataListItems] = useState([]);
    console.log(dataProducts);
    useEffect(() => {
        requestProducts();
    }, [requestProducts])

    useEffect(() => {
        setDataListItems(dataProducts.searchProducts.length !== 0 ? dataProducts.searchProducts : dataProducts.products);
    }, [dataProducts.searchProducts, dataProducts.products])

 
    let productsListItems = dataListItems.map((item) => {
        return <ProductsList key={item.id}
                             id={item.id}
                             image={item.image}           
                             title={item.title} 
                             price={item.price} 
                             description={item.description}
                             addToBasket={addToBasket}
                             onOpenModal={onOpenModal}
                             translation={translation} 
                             />})
    
    return(
        <section className="list">
            <h2 className="list__main-title">
            {translation.lang === 'ru' ? translation.dictionary.RU_SHOP_PRODUCTS : translation.dictionary.EN_SHOP_PRODUCTS}
            </h2>
            <CustomModal show={dataProducts.showProduct} changeModal={changeModal}>
                <ProductDetails product={dataProducts.product}/>
            </CustomModal>
            <div className="list__items">
            {dataProducts.products.length !== 0 ? 
            productsListItems 
            :  
            <div>
                <img src={loader}  style={{width: '75px', position: 'absolute', top: '50%', left: '48%'}} alt="loading..."/>
            </div>
            }
            </div>
        </section>
        
    );
}


const mapStateToProps = (state) => {
    return {
      dataProducts: state.productsPage,
      translation: state.translation
    };
};


export default compose(
    connect(mapStateToProps, { requestProducts, addToBasket, changeModal, onOpenModal })
)(ProductsListContainer);