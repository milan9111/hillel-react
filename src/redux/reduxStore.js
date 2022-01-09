import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { productsListReducer } from './productsListReducer';    
import { basketReducer } from "./basketReducer";
import { translationReducer } from "./translationReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  productsPage: productsListReducer,
  basketPage: basketReducer,
  translation: translationReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;