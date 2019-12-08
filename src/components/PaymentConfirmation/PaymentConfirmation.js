import React, { useState, useEffect } from "react";

// Modules
import { useSelector, useDispatch } from "react-redux";

// Utils
import styles from "./PaymentConfirmation.module.scss";

// Components
import Button from "../Button/Button";
import CartItems from "../CartItems/CartItems";
import getTotalCost from "../../helpers/functions/getCartTotalCost";

const PaymentConfirmation = ({ step, cartItems }) => {
  const dispatch = useDispatch();
  const { userCards } = useSelector(state => ({
    userCards: state.user.userCards
  }));

  const { isModalOpen } = useSelector(state => ({
    isModalOpen: state.modal.card.isModalOpen
  }));

  const [choosenCard, setChoosenCard] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await dispatch(fetchUserCards());
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.paymentAccepted}>Payment accepted</div>
      <div className={styles.info}>Paid: {getTotalCost(cartItems)}$</div>
      <div className={styles.info}>Bought items:</div>
      <div className={styles.cartItems}>
        <CartItems items={cartItems} />
      </div>
    </div>
  );
};

export default PaymentConfirmation;
