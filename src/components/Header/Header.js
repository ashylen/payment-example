import React from "react";

// Utils
import styles from "./Header.module.scss";

// Components
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <Nav />
    </header>
  );
};

export default Header;
