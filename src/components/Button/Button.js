import React from "react";

// Modules
import PropTypes from "prop-types";

// Utilities
import styles from "./Button.module.scss";

const Button = ({
  children: content,
  href,
  cssClass,
  backgroundImage,
  invertTextColor,
  onClick,
  type,
  ...props
}) => {
  const buttonType = type || "submit";
  const textClass = invertTextColor ? styles.invertText : styles.text;

  return (
    <React.Fragment>
      {href ? (
        <a
          href={href}
          target="_blank"
          className={styles.button}
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        <button
          onClick={onClick}
          type={buttonType}
          className={styles.button}
          {...props}
        >
          <span className={textClass}>{content}</span>
        </button>
      )}
    </React.Fragment>
  );
};

Button.defaultProps = {
  children: "",
  href: "",
  cssClass: "",
  backgroundImage: "",
  invertTextColor: false,
  onClick: () => {},
  type: "submit"
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  href: PropTypes.string,
  cssClass: PropTypes.string,
  backgroundImage: PropTypes.string,
  invertTextColor: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["submit", "reset", "button", ""])
};

export default Button;
