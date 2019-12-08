import axios from "axios";

export const FETCH_USER_CARDS = "FETCH_USER_CARDS";

export const fetchUserCards = () => async dispatch => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/userCards`
    );
    dispatch({
      type: FETCH_USER_CARDS,
      payload: response.data
    });
  } catch (error) {
    throw error;
  }
};

export const addCard = data => async dispatch => {
  try {
    console.log(data);
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/userCards`,
      {
        ...data
      }
    );
  } catch (error) {
    console.error(error);
    // dispatch({ type: ADD_articleS_FAILURE });
  }
};
