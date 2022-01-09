import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";


const Error = ({translation}) => {
     
        return(
            <div className="error">
               {translation.lang === 'ru' ? translation.dictionary.RU_TITLE_ERROR : translation.dictionary.EN_TITLE_ERROR}
            </div>
         
    );
}


const mapStateToProps = (state) => {
    return {
      translation: state.translation
    };
};


export default compose(
    connect(mapStateToProps, {})
)(Error);