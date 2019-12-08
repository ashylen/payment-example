import React, { useState, useEffect } from "react";

// Modules
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Utils
import { routes } from "../../routes";
import styles from "./Nav.module.scss";
import { fetchCart } from "../../actions/cartActions";

// Components
import icoCart from "../../assets/icons/cart.svg";
import Cart from "../Cart/Cart";

const Nav = () => {
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useSelector(state => ({
    cart: state.cart.items
  }));

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchCart());
    };

    fetchData();
  }, []);

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <div className={styles.item}>
          <Link to={routes.home}>Homepage</Link>
        </div>
        <div className={styles.item}>
          <button
            type="button"
            className={styles.cart}
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <div className={styles.icoWrapper}>
              <img src={icoCart} alt="cart" />
            </div>
            <div className={styles.count}>{cart && cart.length}</div>
          </button>
        </div>
      </nav>
      <Cart
        cartItems={cart}
        isOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
    </div>
  );
};

export default Nav;
