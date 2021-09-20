import React from "react";
import styles from "./search.module.scss";
import blueSearch from "../../icons/blue_search.svg";

export const Search = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <input type="text" />
        <img src={blueSearch} alt="search icon" />
      </div>
    </div>
  );
};
