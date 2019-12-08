import React, { useState, useEffect } from "react";

// Modules
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
// import classNames from "classnames";
import "slick-carousel/slick/slick.css";
import { CSSTransition } from "react-transition-group";

// Utils
import fadeTransition from "../../utilities/css/transitions/fade.module.scss";
import { openCardModal, closeCardModal } from "../../actions/modalActions";
import { fetchUser } from "../../actions/userActions";
import styles from "./CreditCard.module.scss";

// Components
import CreditCardItem from "../CreditCardItem/CreditCardItem";
import Modal from "../Modal/Modal";
import AddCardForm from "../AddCardForm/AddCardForm";
import Button from "../Button/Button";

const CreditCard = ({ step }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => ({
    user: state.user.user
  }));

  const { isModalOpen } = useSelector(state => ({
    isModalOpen: state.modal.card.isModalOpen
  }));

  const [choosenCard, setChoosenCard] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchUser());
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: false,
    afterChange: index => {
      setChoosenCard(index + 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Slider {...settings}>
        {!!user.cards &&
          user.cards.length > 0 &&
          user.cards.map(card => <CreditCardItem data={card} />)}
      </Slider>
      <div>
        <Button onClick={() => dispatch(openCardModal())}>Add new card</Button>
      </div>
      <CSSTransition
        in={isModalOpen}
        timeout={350}
        classNames={{ ...fadeTransition }}
        unmountOnExit
      >
        <Modal closeModalFn={() => dispatch(closeCardModal())}>
          <AddCardForm closeModalFn={() => dispatch(closeCardModal())} />
        </Modal>
      </CSSTransition>
    </div>
  );
};

export default CreditCard;
