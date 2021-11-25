import React, { useContext, useState } from "react";
import ContextProduct from "../contexts/ContextProduct";
import CustomModal from "./CustomModal";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";


const ProductListContainer = ({ addProduct }) => {
    const [show, setShow] = useState(false);
    const [clickedProduct, setClickedProduct] = useState(null);
    const dataProducts = useContext(ContextProduct);

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

    return(
        <section className="list">
            <h2 className="list__main-title">
            shop products
            </h2>
            <CustomModal show={show} changeModal={changeModal}>
                <ProductDetails idProduct={clickedProduct}/>
            </CustomModal>
            <div className="list__items">
            {listWithProducts}
            </div>
        </section>
        
    );
}


export default ProductListContainer;