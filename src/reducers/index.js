import { combineReducers } from "redux";
import cart from "./cartReducer";
import { reducer as formReducer } from "redux-form";
import user from "./userReducer";
import modal from "./modalReducer";

const rootReducer = combineReducers({
  user,
  cart,
  modal,
  form: formReducer
});

export default rootReducer;
