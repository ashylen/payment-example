import React from "react";

// Utils
import chip from "../../assets/images/chip.png";
import visa from "../../assets/images/visa.png";
import mastercard from "../../assets/images/mastercard.png";
import cardBg from "../../assets/images/bg.jpeg";
import styles from "./CreditCardItem.module.scss";

const getLogoByCardNumber = number => {
  let regex = new RegExp("^4");
  if (number.match(regex) != null) return visa;

  regex = new RegExp("^5[1-5]");
  if (number.match(regex) != null) return mastercard;

  return visa;
};

const CreditCardItem = ({ data }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardCover}>
          <img src={cardBg} />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardTop}>
            <img src={chip} className={styles.chip} alt="chip" />
            <div className={styles.type}>
              <img src={getLogoByCardNumber(data.number)} alt="Provider logo" />
            </div>
          </div>
          <div className={styles.number}>{data.number}</div>
          <div className={styles.cardBottom}>
            <div className={styles.cardInfo}>
              <div className={styles.cardHolder}>Card Holder</div>
              <div className={styles.cardName}>{data.card_holder}</div>
            </div>
            <div className={styles.date}>
              <div className={styles.dateTitle}>Expires</div>
              <div className={styles.dateItem}>
                <span>{data.expiration_month}</span>
              </div>
              /
              <div className={styles.dateItem}>
                <span>{data.expiration_year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardItem;
