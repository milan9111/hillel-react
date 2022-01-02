import React, { useContext, useState } from "react";
import ContextProduct from "../contexts/ContextProduct";
import ContextTranslation from "../contexts/ContextTranslation";
import ContextLang from "../contexts/ContextLang";
import CustomModal from "./CustomModal";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
import loader from './../source/images/loader.gif'


const ProductListContainer = ({ addProduct }) => {
    const [show, setShow] = useState(false);
    const [clickedProduct, setClickedProduct] = useState(null);
    const dataProducts = useContext(ContextProduct);
    const dataLang = useContext(ContextTranslation);
    const lang = useContext(ContextLang);
    


    const changeModal = () => {
        setShow(!show)
    }
    
    const selectedIdProduct = (event) => {
         setClickedProduct(event.target.id);
         changeModal();
    }


    const listWithProducts = dataProducts?.map((item) => <ProductList key={item.id}
                                                                      id={item.id}
                                                                      image={item.image}           
                                                                      title={item.title} 
                                                                      price={item.price} 
                                                                      description={item.description} 
                                                                      addProduct={addProduct}
                                                                      selectedIdProduct={selectedIdProduct}    
                                                                      />)
    console.log(dataProducts);
    return(
        <section className="list">
            <h2 className="list__main-title">
            {lang === 'en' ? dataLang.EN_SHOP_PRODUCTS : dataLang.RU_SHOP_PRODUCTS}
            </h2>
            <CustomModal show={show} changeModal={changeModal}>
                <ProductDetails idProduct={clickedProduct}/>
            </CustomModal>
            <div className="list__items">
            {dataProducts.length !== 0 ? 
            listWithProducts 
            :  
            <div>
                <img src={loader}  style={{width: '75px', position: 'absolute', top: '50%', left: '48%'}} alt="loading..."/>
            </div>
            }
            </div>
        </section>
        
    );
}


export default ProductListContainer;