import { FETCH_CART } from "../actions/cartActions";

const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;
