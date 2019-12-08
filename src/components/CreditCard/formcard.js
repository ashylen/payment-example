import React from "react";

// Modules
import Slider from "react-slick";
import classNames from "classnames";
import "slick-carousel/slick/slick.css";

// Utils
import styles from "./CreditCard.module.scss";
import chip from "../../assets/images/chip.png";
import visa from "../../assets/images/visa.png";
import cardBg from "../../assets/images/bg.jpeg";

const CreditCard = ({ step }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className={styles.wrapper}>
      <span>Choose card:</span>
      <Slider {...settings}>
        <div className={styles.cardContainer}>
          <div className={styles.cardWrapper}>
            <div className={styles.cardCover}>
              <img src={cardBg} class="card-item__bg" />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardTop}>
                <img src={chip} className={styles.chip} alt="chip" />
                <div className={styles.type}>
                  <img src={visa} alt="" />
                </div>
              </div>
              <label htmlFor="cardNumber" className={styles.number}>
                <span>
                  <span className={styles.numberItem}>#</span>
                </span>
                <span>
                  <span className={styles.numberItem}>#</span>
                </span>
                <span>
                  <span className={styles.numberItem}>#</span>
                </span>
                <span>
                  <span className={styles.numberItem}>#</span>
                </span>
                <span>
                  <span
                    className={classNames(styles.numberItem, {
                      [styles.numberItemActive]: true
                    })}
                  >
                    {" "}
                  </span>
                </span>
                <span>
                  <span className={styles.numberItem}>#</span>
                </span>
                <span>
                  <span className={styles.numberItem}>#</span>
                </span>
                <span>
                  <span className={styles.numberItem}>#</span>
                </span>
                <span>
                  <span className={styles.numberItem}>#</span>
                </span>
                <span>
                  <span
                    className={classNames(styles.numberItem, {
                      [styles.numberItemActive]: true
                    })}
                  >
                    {" "}
                  </span>
                </span>
                <span>
                  <span className={styles.numberItem}>#</span>
                </span>
                <span>
                  <span className={styles.numberItem}>#</span>
                </span>
                <span>
                  <span className={styles.numberItem}>#</span>
                </span>
                <span>
                  <span className={styles.numberItem}>#</span>
                </span>
                <span>
                  <span
                    className={classNames(styles.numberItem, {
                      [styles.numberItemActive]: true
                    })}
                  >
                    {" "}
                  </span>
                </span>
                <span>
                  <span className={styles.numberItem}>#</span>
                </span>
                <span>
                  <span className={styles.numberItem}>#</span>
                </span>
                <span>
                  <span className={styles.numberItem}>#</span>
                </span>
                <span>
                  <span className={styles.numberItem}>#</span>
                </span>
              </label>
              <div className={styles.cardBottom}>
                <div htmlFor="cardName" className={styles.cardInfo}>
                  <div className={styles.cardHolder}>Card Holder</div>
                  <div className={styles.cardName}>Full Name</div>
                </div>
                <div class="card-item__date">
                  <label htmlFor="cardMonth" className={styles.dateTitle}>
                    Expires
                  </label>{" "}
                  <label htmlFor="cardMonth" className={styles.dateTitle}>
                    <span>11</span>
                  </label>
                  /
                  <label htmlFor="cardYear" className={styles.dateTitle}>
                    <span>29</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CreditCard;
