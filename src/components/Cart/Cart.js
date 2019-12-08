import React, { useState, useEffect } from "react";

// Modules
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

// Utils
import getTotalCost from "../../helpers/functions/getCartTotalCost";
import { routes } from "../../routes";
import styles from "./Cart.module.scss";
import icoClose from "../../assets/icons/close.svg";

// Components
import CartItems from "../CartItems/CartItems";

const Cart = ({ cartItems, isOpen, setIsCartOpen }) => {
  const location = useLocation();

  return (
    <React.Fragment>
      <div
        className={classNames(styles.cartWrapper, {
          [styles.open]: isOpen
        })}
      >
        <div className={styles.headerWrapper}>
          <span className={styles.title}>Cart</span>
          <button
            type="button"
            className={styles.btnClose}
            onClick={() => setIsCartOpen(false)}
          >
            <img src={icoClose} alt="cart" />
          </button>
        </div>
        <div className={styles.itemsWrapper}>
          <div className={styles.itemsInner}>
            <CartItems items={cartItems} />
          </div>
        </div>
        {cartItems && cartItems.length > 0 && (
          <div className={styles.bottom}>
            <div className={styles.total}>
              Total: {getTotalCost(cartItems)}$
            </div>
            {location.pathname === routes.checkout ? (
              <a>
                <button onClick={() => setIsCartOpen(false)}>Checkout</button>
              </a>
            ) : (
              <Link to={routes.checkout}>
                <button>Checkout</button>
              </Link>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Cart;
