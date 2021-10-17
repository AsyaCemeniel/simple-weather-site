import React, { FC } from "react";
import { useSelector } from "../../hooks";
import { ForecastType } from "../../types";
import { icons } from "../../utils/data";
import { Skeleton } from "../skeleton";
import styles from "./dailyForecast.module.scss";

type PropType = {
  weather: ForecastType;
  isMetric: boolean;
};

export const DailyForecast: FC<PropType> = ({ weather, isMetric }) => {
  const { favoritesList, favorites } = useSelector(
    (store) => store.FavoritesReducer
  );
  const failLoading = useSelector(
    (store) => store.MainReducer.currentForecastFailure
  );

  const isLoading = favorites.length === favoritesList.length;

  const { date, weekDay, icon, maxTemp, minTemp, weatherText } = weather;

  const currentIcon = icons[icon];
  const minMaxTemp = isMetric
    ? maxTemp.c + "°C / " + minTemp.c + "°C"
    : maxTemp.f + "°F / " + minTemp.f + "°F";

  if (!isLoading || failLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.today}>
            <Skeleton parameters={{ width: "150px", height: "45px" }} />
            <Skeleton
              parameters={{ width: "90px", height: "35px", marginTop: "10px" }}
            />
          </div>
          <div className={styles.icon}>
            <Skeleton
              parameters={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                marginTop: "10px",
              }}
            />
          </div>
          <Skeleton parameters={{ width: "130px", height: "45px" }} />
          <Skeleton
            parameters={{ width: "90px", height: "30px", marginTop: "10px" }}
          />
        </div>
      </div>
    );
  }

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
