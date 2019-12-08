import { FETCH_USER_CARDS } from "../actions/userActions";

const initialState = {
  userCards: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_CARDS:
      return {
        ...state,
        userCards: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
