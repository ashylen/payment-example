import React from "react";

// Utils
import styles from "./CartItems.module.scss";

const CartItems = ({ items }) => {
  return (
    <div className={styles.wrapper}>
      {!!items && items.length === 0 ? (
        <div className={styles.notFound}>
          <span>Cart is empty</span>
        </div>
      ) : (
        <div className={styles.items}>
          {!!items &&
            items.length > 0 &&
            items.map(item => (
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
  );
};

export default CartItems;
