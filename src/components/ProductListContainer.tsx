import React, { useContext, useState } from "react";
import ContextProduct from "../contexts/ContextProduct";
import { ProductListContainerProps, ProductsType } from "../helpers/interfaces";
import CustomModal from "./CustomModal";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";



const ProductListContainer: React.FC<ProductListContainerProps> = ({ addProduct }) => {
    const [show, setShow] = useState<any>(false);
    const [clickedProduct, setClickedProduct] = useState<string | null>(null);
    const dataProducts = useContext<Array<ProductsType>>(ContextProduct);

    const changeModal = ():void => {
        setShow(!show)
    }
    
    const selectedIdProduct = (event: React.MouseEvent<HTMLButtonElement>):void => {
         setClickedProduct(event.currentTarget.id);
         changeModal();
    }


    const listWithProducts = dataProducts?.map((item) => <ProductList key={item.id}
                                                                      id={item.id}
                                                                      image={item.image}           
                                                                      title={item.title} 
                                                                      price={item.price} 
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