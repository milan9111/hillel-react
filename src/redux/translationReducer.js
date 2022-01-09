import TRANSLATION from "../helpers/languages";

const CHANGE_LANG_EN = 'CHANGE_LANG_EN';
const CHANGE_LANG_RU = 'CHANGE_LANG_RU';



let initialState = {
    dictionary: TRANSLATION,
    lang: 'ru'
}


export const translationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANG_EN: 
        return {...state, lang: 'en'};
        case CHANGE_LANG_RU: 
          return {...state, lang: 'ru'};
        default:
          return state;
      }
};



export let changeLangEn = () => ({ type: CHANGE_LANG_EN });
export let changeLangRu = () => ({ type: CHANGE_LANG_RU });


export const onChangeLangEn = () => {
    return(dispatch) => {
        dispatch(changeLangEn());
    }
}

export const onChangeLangRu = () => {
    return(dispatch) => {
        dispatch(changeLangRu());
    }
}