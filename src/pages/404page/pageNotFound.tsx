import React from "react";
import { Link } from "react-router-dom";
import styles from "./pageNotFound.module.scss";

export const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.number}>4</div>
      <div className={styles.big_circle}>
        <div className={styles.small_circle}>
          <div className={styles.info}>
            <div className={styles.not_found}>
              page <span>not</span> found
            </div>
            <Link to="/simple-weather-site">
              <div className={styles.button}>To main page</div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.number}>4</div>
    </div>
  );
};
