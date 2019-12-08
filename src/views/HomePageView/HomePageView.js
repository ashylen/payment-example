import React from "react";

// Utils
import styles from "./HomePageView.module.scss";

// Components
import MainTemplate from "../../templates/MainTemplate/MainTemplate";

const HomePageView = () => {
  return (
    <MainTemplate>
      <div className={styles.text}>Press Cart button</div>
    </MainTemplate>
  );
};

export default HomePageView;
