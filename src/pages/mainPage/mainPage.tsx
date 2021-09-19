import React, { useState } from "react";
import { TodayForecast } from "../../components/todayForecast";
import styles from "./mainPage.module.scss";

export const MainPage = () => {
  const [isMetric, setIsMetric] = useState(true);

  return (
    <section className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.back_circle}></div>
      <div className={styles.main}>
        <div className={styles.button}>
          <button onClick={() => setIsMetric(!isMetric)}> °C / °F </button>
        </div>
        <div className={styles.current_box}>
          <span className={styles.todo}>Some weather forecast</span>
          <TodayForecast isMetric={isMetric} />
        </div>
      </div>
    </section>
  );
};
