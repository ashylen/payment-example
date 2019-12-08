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
            {cartItems.length === 0 ? (
              <div className={styles.notFound}>
                <span>Cart is empty</span>
              </div>
            ) : (
              <div className={styles.items}>
                {cartItems &&
                  cartItems.map(item => (
                    <div className={styles.item} key={item.id}>
                      <div className={styles.contentWrapper}>
                        <div className={styles.titleWrapper}>
                          <span className={styles.title}>{item.name}</span>
                        </div>
                        <div className={styles.quantityWrapper}>
                          <span className={styles.quantity}>
                            Quantity: {item.quantity}
                          </span>
                        </div>
                        <div className={styles.quantityWrapper}>
                          <span className={styles.quantity}>
                            Price: {item.price}$
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
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
