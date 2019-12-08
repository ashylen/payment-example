import { OPEN_CARD_MODAL, CLOSE_CARD_MODAL } from "../actions/modalActions";

const initialState = {
  card: {
    isModalOpen: false
  }
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CARD_MODAL:
      return {
        ...state,
        card: {
          isModalOpen: action.card.isModalOpen
        }
      };
    case CLOSE_CARD_MODAL:
      return {
        ...state,
        card: {
          isModalOpen: false
        }
      };
    default:
      return state;
  }
};

export default modalReducer;
