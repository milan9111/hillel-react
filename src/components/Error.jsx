import React, { useContext } from "react";
import ContextTranslation from "../contexts/ContextTranslation";
import ContextLang from "../contexts/ContextLang";


const Error = () => {
    const dataLang = useContext(ContextTranslation);
    const lang = useContext(ContextLang);
    return(
        <div className="error">
           {lang === 'en' ? dataLang.EN_TITLE_ERROR : dataLang.RU_TITLE_ERROR}
        </div>
    );
}


export default Error;