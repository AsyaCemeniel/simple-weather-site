import React from "react";
import styles from "./mainPage.module.scss";

export const MainPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.back_circle}></div>
      <div className={styles.main}>
        <span>Some weather forecast</span>
      </div>
    </section>
  );
};
