export const OPEN_CARD_MODAL = "OPEN_CARD_MODAL";
export const CLOSE_CARD_MODAL = "CLOSE_CARD_MODAL";

export const openCardModal = () => dispatch => {
  dispatch({
    type: OPEN_CARD_MODAL,
    card: {
      isModalOpen: true
    }
  });
};

export const closeCardModal = () => dispatch => {
  dispatch({
    type: CLOSE_CARD_MODAL
  });
};
