import React, { FC } from "react";
import { useSelector } from "../../hooks";
import styles from "./todayForecast.module.scss";
import { icons } from "../../utils/data";
import { Skeleton } from "../skeleton";

type PropType = {
  isMetric: boolean;
};

export const TodayForecast: FC<PropType> = ({ isMetric }) => {
  const todayForecast = useSelector(
    (store) => store.MainReducer.currentForecast
  );

  const loading = useSelector(
    (store) => store.MainReducer.currentForecastRequest
  );

  const failLoading = useSelector(
    (store) => store.MainReducer.currentForecastFailure
  );

  const currentIcon = icons[todayForecast?.icon || "30"];
  const minMaxTemp = isMetric
    ? todayForecast?.maxTemp.c + "°C / " + todayForecast?.minTemp.c + "°C"
    : todayForecast?.maxTemp.f + "°F / " + todayForecast?.minTemp.f + "°F";

  if (loading || failLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.first_column}>
            <div className={styles.icon}>
              <Skeleton
                parameters={{
                  width: "170px",
                  height: "170px",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className={styles.temperature}>
              <Skeleton parameters={{ height: "60px", width: "230px" }} />
              <Skeleton
                parameters={{
                  height: "60px",
                  width: "230px",
                  marginTop: "10px",
                }}
              />
            </div>
          </div>
          <div className={styles.second_column}>
            <div className={styles.day_info}>
              <div className={styles.date}>
                <Skeleton parameters={{ height: "60px", width: "280px" }} />
              </div>
              <span className={styles.weather}>
                <Skeleton parameters={{ height: "60px", width: "280px" }} />
              </span>
            </div>
            <div className={styles.parameters}>
              <span>
                <Skeleton parameters={{ height: "60px", width: "260px" }} />
              </span>
              <span className={styles.wind}>
                <Skeleton parameters={{ height: "60px", width: "260px" }} />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              <span className={styles.day}> {todayForecast?.date}</span>
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
