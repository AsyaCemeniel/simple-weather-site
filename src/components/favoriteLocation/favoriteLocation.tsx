import React, { FC } from "react";
import { favoriteType } from "../../types";
import { icons } from "../../utils/data";
import styles from "./favoriteLocation.module.scss";

type PropsType = {
  favorite: favoriteType;
  isMetric: boolean;
};

export const FavoriteLocation: FC<PropsType> = ({ favorite, isMetric }) => {
  const { location, icon, currentTemp, maxTemp, minTemp, weatherText } =
    favorite;

  const currentIcon = icons[icon];
  const minMaxTemp = isMetric
    ? maxTemp.c + "°C / " + minTemp.c + "°C"
    : maxTemp.f + "°F / " + minTemp.f + "°F";

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.today}>
          <span className={styles.city}>{location.city}</span>
          <span className={styles.country}>{location.country}</span>
        </div>
        <div className={styles.icon}>
          <img src={currentIcon} alt="weather icon" />
        </div>
        <div className={styles.temperature}>
          <div>{isMetric ? currentTemp.c + "°C" : currentTemp.f + "°F"}</div>
          <div>{minMaxTemp}</div>
        </div>
        <div className={styles.weather}>{weatherText}</div>
      </div>
    </div>
  );
};
