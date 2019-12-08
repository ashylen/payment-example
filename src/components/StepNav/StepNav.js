import React from "react";

// Modules
import classNames from "classnames";

// Utils
import styles from "./StepNav.module.scss";

const StepNav = ({ step }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.line}>
        <div
          className={classNames(styles.stepText, {
            [styles.active]: step === 1
          })}
        >
          <span className={styles.circle}>1</span>
          <span className={styles.text}>Summary</span>
        </div>
        <div
          className={classNames(styles.stepText, {
            [styles.active]: step === 2
          })}
        >
          <span className={styles.circle}>2</span>
          <span className={styles.text}>Credit card</span>
        </div>
        <div
          className={classNames(styles.stepText, {
            [styles.active]: step === 3
          })}
        >
          <span className={styles.circle}>3</span>
          <span className={styles.text}>Final</span>
        </div>
      </div>
    </div>
  );
};

export default StepNav;
