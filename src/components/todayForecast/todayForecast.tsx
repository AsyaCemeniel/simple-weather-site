import React, { FC } from "react";
import styles from "./todayForecast.module.scss";
import { todayForecast, icons } from "../../utils/data";

type PropType = {
  isMetric: boolean;
};

export const TodayForecast: FC<PropType> = ({ isMetric }) => {
  const {
    weekDay,
    date,
    icon,
    weatherText,
    currentTemp,
    maxTemp,
    minTemp,
    humidity,
    wind,
  } = todayForecast;

  const currentIcon = icons[icon];
  const minMaxTemp = isMetric
    ? maxTemp.c + "°C / " + minTemp.c + "°C"
    : maxTemp.f + "°F / " + minTemp.f + "°F";

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.first_column}>
          <div className={styles.icon}>
            <img src={currentIcon} alt="weather icon" />
          </div>
          <div className={styles.temperature}>
            <span>
              {isMetric ? currentTemp.c + "°C" : currentTemp.f + "°F"}
            </span>
            <span>{minMaxTemp}</span>
          </div>
        </div>
        <div className={styles.second_column}>
          <div className={styles.day_info}>
            <div>
              <span>{weekDay}</span>
              <span>{date}</span>
            </div>
            <span>{weatherText}</span>
          </div>
          <div className={styles.parameters}>
            <span>{humidity}%</span>
            <span>{isMetric ? wind.m : wind.i}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
