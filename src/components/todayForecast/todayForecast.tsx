import React, { FC } from "react";
import { useSelector } from "../../hooks";
import styles from "./todayForecast.module.scss";
import { icons } from "../../utils/data";

type PropType = {
  isMetric: boolean;
};

export const TodayForecast: FC<PropType> = ({ isMetric }) => {
  const todayForecast = useSelector(
    (store) => store.MainReducer.currentForecast
  );

  const currentIcon = icons[todayForecast?.icon || "30"];
  const minMaxTemp = isMetric
    ? todayForecast?.maxTemp.c + "°C / " + todayForecast?.minTemp.c + "°C"
    : todayForecast?.maxTemp.f + "°F / " + todayForecast?.minTemp.f + "°F";

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.first_column}>
          <div className={styles.icon}>
            <img src={currentIcon} alt="weather icon" />
          </div>
          <div className={styles.temperature}>
            <span className={styles.current_temp}>
              {isMetric
                ? todayForecast?.currentTemp.c + "°C"
                : todayForecast?.currentTemp.f + "°F"}
            </span>
            <span>{minMaxTemp}</span>
          </div>
        </div>
        <div className={styles.second_column}>
          <div className={styles.day_info}>
            <div className={styles.date}>
              <span>{todayForecast?.weekDay} </span>
              <span> {todayForecast?.date}</span>
            </div>
            <span className={styles.weather}>{todayForecast?.weatherText}</span>
          </div>
          <div className={styles.parameters}>
            <span>
              {" "}
              <span className={styles.text}>Humidity: </span>
              {todayForecast?.humidity}%
            </span>
            <span className={styles.wind}>
              <span className={styles.text}>Wind: </span>
              {isMetric ? todayForecast?.wind.m : todayForecast?.wind.i}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
