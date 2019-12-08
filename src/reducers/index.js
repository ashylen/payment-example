import { combineReducers } from "redux";
import cart from "./cartReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  user,
  cart
});

export default rootReducer;
