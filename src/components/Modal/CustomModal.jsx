import React from "react";



const CustomModal = ({show, 
                      changeModal, 
                      children}) => {

    return show && (
        <div className="modal">
            <div className="modal__content">
                 <div className="modal__close">
                    <button><i className="fa fa-times" aria-hidden="true" onClick={changeModal}></i></button>
                 </div>
                 {children}
            </div>
        </div>
    );
}

export default CustomModal;