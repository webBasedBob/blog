import React, { useState } from "react";
import styles from "./CTAButton.module.scss";
const CTAButton = ({ label, config }) => {
  const [classes, setClasses] = useState(styles.button);
  const addClass = (newClass) => {
    setClasses((prev) => {
      return `${prev} ${styles[newClass]}`;
    });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <button
          {...config}
          className={classes}
          onClick={() => {
            addClass("active");
            setTimeout(() => {
              setClasses(styles.button);
            }, 500);
          }}
        >
          {label}
        </button>
      </div>
    </div>
  );
};

export default CTAButton;
