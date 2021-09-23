import React, { useState } from "react";
import styles from "./star.module.scss";
import star from "../../icons/star.svg";

export const Star = () => {
  const [isActive, setActive] = useState(false);

  const handelClick = () => {
    setActive(!isActive);
  };

  return (
    <div className={styles.container}>
      <img
        src={star}
        alt="full star img"
        onClick={handelClick}
        className={`${styles.star} ${
          isActive ? styles.full_star : styles.empty_star
        }`}
      />
    </div>
  );
};
