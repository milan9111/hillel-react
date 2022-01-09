const CREATE_OBJECT_PRODUCT = 'CREATE_OBJECT_PRODUCT';
const ADD_ONE_ITEM_IN_BASKET = 'ADD_ONE_ITEM_IN_BASKET';
const REMOVE_ONE_ITEM_IN_BASKET = 'REMOVE_ONE_ITEM_IN_BASKET';
const REMOVE_PRODUCT_IN_BASKET = 'REMOVE_PRODUCT_IN_BASKET';


let savedLocalStorage = JSON.parse(localStorage.getItem("productsInBasket")) || [];



let initialState = {
    productsInBasket: savedLocalStorage.productsInBasket || []
}

 

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_OBJECT_PRODUCT:
            let findProduct = state.productsInBasket.find(item => item.id === action.id);
            if(findProduct) {
                findProduct.count = findProduct.count + 1;
                let selectedProducts = state.productsInBasket.filter(item => item.id !== action.id);
                localStorage.setItem("productsInBasket", JSON.stringify({...state, productsInBasket: [...selectedProducts, findProduct]}));
                return {...state, productsInBasket: [...selectedProducts, findProduct]}
            }
            let objProduct = {};
            objProduct.id = action.id;
            objProduct.count = 1;
            localStorage.setItem("productsInBasket", JSON.stringify({...state, productsInBasket: [...state.productsInBasket, objProduct]}));
            return {...state, productsInBasket: [...state.productsInBasket, objProduct]}
        case ADD_ONE_ITEM_IN_BASKET: 
            let findAddProduct = state.productsInBasket.find(item => item.id === action.id);
            findAddProduct.count = findAddProduct.count + 1;
            let selectedProductsAdd = state.productsInBasket.filter(item => item.id !== action.id);
            localStorage.setItem("productsInBasket", JSON.stringify({...state, productsInBasket: [...selectedProductsAdd, findAddProduct]}));
            return {...state, productsInBasket: [...selectedProductsAdd, findAddProduct]}
        case REMOVE_ONE_ITEM_IN_BASKET:
            let findRemoveProduct = state.productsInBasket.find(item => item.id === action.id);
            if(findRemoveProduct.count < 2) {
                let selectedProductsRemoveProduct = state.productsInBasket.filter(item => item.id !== action.id);
                localStorage.setItem("productsInBasket", JSON.stringify({...state, productsInBasket: [...selectedProductsRemoveProduct]}));
                return {...state, productsInBasket: [...selectedProductsRemoveProduct]}  
            }
            findRemoveProduct.count = findRemoveProduct.count - 1;
            let selectedProductsRemove = state.productsInBasket.filter(item => item.id !== action.id);
            localStorage.setItem("productsInBasket", JSON.stringify({...state, productsInBasket: [...selectedProductsRemove, findRemoveProduct]}));
            return {...state, productsInBasket: [...selectedProductsRemove, findRemoveProduct]}
        case REMOVE_PRODUCT_IN_BASKET: 
            let selectedProductsRemoveProduct = state.productsInBasket.filter(item => item.id !== action.id);
            localStorage.setItem("productsInBasket", JSON.stringify({...state, productsInBasket: [...selectedProductsRemoveProduct]}));
            return {...state, productsInBasket: [...selectedProductsRemoveProduct]}  
        default:
            return state;  
    }
    
};


const createObjectProduct = (id) => ({ type: CREATE_OBJECT_PRODUCT, id });
const addOneItemInBasket = (id) => ({ type: ADD_ONE_ITEM_IN_BASKET, id });
const removeOneItemInBasket = (id) => ({ type: REMOVE_ONE_ITEM_IN_BASKET, id });
const removeProductInBasket = (id) => ({ type: REMOVE_PRODUCT_IN_BASKET, id })  


export const addToBasket = (addId) => {
    return (dispatch) => {
      dispatch(createObjectProduct(addId));
    };
};

export const addOneItem = (addId) => {
    return (dispatch) => {
        dispatch(addOneItemInBasket(addId));
    }
}

export const removeOneItem = (removeId) => {
    return (dispatch) => {
        dispatch(removeOneItemInBasket(removeId));
    }
}

export const removeProduct = (removeId) => {
    return (dispatch) => {
        dispatch(removeProductInBasket(removeId));
    }
}
 

 

 