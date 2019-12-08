import React, { useState, useEffect } from "react";

// Modules
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
// import classNames from "classnames";
import "slick-carousel/slick/slick.css";

// Utils
import { fetchUser } from "../../actions/userActions";
import styles from "./CreditCard.module.scss";

// Components
import CreditCardItem from "../CreditCardItem/CreditCardItem";

const CreditCard = ({ step }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => ({
    user: state.user.user
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
      {console.log(choosenCard)}
      <span>Choose card:</span>
      <Slider {...settings}>
        {!!user.cards &&
          user.cards.length > 0 &&
          user.cards.map(card => <CreditCardItem data={card} />)}
      </Slider>
    </div>
  );
};

export default CreditCard;
