import axios from "axios";

export const FETCH_USER = "FETCH_USER";

export const fetchUser = () => async dispatch => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/user`);
    dispatch({
      type: FETCH_USER,
      payload: response.data
    });
  } catch (error) {
    throw error;
  }
};
