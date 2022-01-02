import React from "react";
import './../styles/styles.css';


const CustomModal = ({show, 
                      changeModal, 
                      children}) => {

    return show && (
        <div className="modal">
            <div className="modal__content">
                 <div className="modal__close">
                    <button onClick={changeModal}> X </button>
                 </div>
                 {children}
            </div>
        </div>
    );
}

export default CustomModal;