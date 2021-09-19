import React, { FC } from "react";
import { ForecastType } from "../../types";
import { icons } from "../../utils/data";
import styles from "./dailyForecast.module.scss";

type PropType = {
  weather: ForecastType;
  isMetric: boolean;
};

export const DailyForecast: FC<PropType> = ({ weather, isMetric }) => {
  const { date, weekDay, icon, maxTemp, minTemp, weatherText } = weather;

  const currentIcon = icons[icon];
  const minMaxTemp = isMetric
    ? maxTemp.c + "°C / " + minTemp.c + "°C"
    : maxTemp.f + "°F / " + minTemp.f + "°F";

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.today}>
          <span className={styles.day}>{weekDay}</span>
          <span className={styles.date}>{date}</span>
        </div>
        <div className={styles.icon}>
          <img src={currentIcon} alt="weather icon" />
        </div>
        <div className={styles.temperature}>{minMaxTemp}</div>
        <div className={styles.weather}>{weatherText}</div>
      </div>
    </div>
  );
};
