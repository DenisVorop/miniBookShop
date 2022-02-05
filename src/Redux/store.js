import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import booksReducer from "./Reducers/booksReducer";
import cartReducer from "./Reducers/cartReducer";
import filterReducer from "./Reducers/filterReducer";

//========================================================================================================================================================

const reducers = combineReducers(
    {
        booksReducer: booksReducer,
        cartReducer: cartReducer,
        filterReducer: filterReducer,
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(logger)))

//========================================================================================================================================================

export default store;
