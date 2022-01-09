import  { productsAPI }  from './../api/api';


const GET_PRODUCTS = 'GET_PRODUCTS';
const ON_SEARCH_PRODUCTS_IN_LIST = 'ON_SEARCH_PRODUCTS_IN_LIST';
const ON_CHANGE_MODAL = 'ON_CHANGE_MODAL';
const OPEN_MODAL = 'OPEN_MODAL';

let savedProducts = JSON.parse(localStorage.getItem("products")) || [];

let initialState = {
    products: savedProducts.products || [],
    searchProducts: [],
    showProduct: false,
    product: null
}

export const productsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
          localStorage.setItem("products", JSON.stringify({...state, products: action.data}));
          return {...state, products: action.data};
        case ON_SEARCH_PRODUCTS_IN_LIST:
          let searchArr = state.products.filter(item => item['title'].toLowerCase().includes(action.value.toLowerCase()) ? item : false);
          return {...state, searchProducts: searchArr};
        case ON_CHANGE_MODAL: 
          return {...state, showProduct: false};
        case OPEN_MODAL: 
          return {...state, showProduct: true, product: action.data};
        default:
          return state;
      }
};


export let getProducts = (data) => ({ type: GET_PRODUCTS, data });
export let onSearchProductsInList = (value) => ({ type: ON_SEARCH_PRODUCTS_IN_LIST, value });
export let onChangeModal = () => ({ type: ON_CHANGE_MODAL });
export let openModal = (data) => ({ type: OPEN_MODAL, data});




export const requestProducts = () => {
  return async (dispatch) => {
    let data = await productsAPI.getProducts();
    dispatch(getProducts(data));
  };
};

export const onSearchProducts = (event) => {
  return(dispatch) => {
    dispatch(onSearchProductsInList(event.target.value));
  }
}

export const changeModal = () => {
  return(dispatch) => {
    dispatch(onChangeModal());
  }
}

export const onOpenModal = (openId) => {
  return async (dispatch) => {
    let data = await productsAPI.getOneProduct(openId);
    dispatch(openModal(data));
  }
}

 


