import axios from "axios";

export const FETCH_CART = "FETCH_CART";

export const fetchCart = () => async dispatch => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/cart`);
    dispatch({
      type: FETCH_CART,
      payload: response.data
    });
  } catch (error) {
    throw error;
  }
};
