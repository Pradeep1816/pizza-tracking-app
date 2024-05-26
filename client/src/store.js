import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { getAllPizzaReducer } from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/CartReducer";
import { getUserReducer, loginUser } from "./reducers/userReducer";
import {
  placeOrderReducer,
  getUserOrderReducer,
} from "./reducers/orderReducer";

const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  getUserReducer: getUserReducer,
  loginUser: loginUser,
  placeOrderReducer: placeOrderReducer,
  getUserOrderReducer: getUserOrderReducer,
});

// get cartITems from LocalStorage
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const INITIAL_STATE = {
  cartReducer: {
    cartItems: cartItems,
  },

  loginUser: {
    currentUser: currentUser,
  },
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
