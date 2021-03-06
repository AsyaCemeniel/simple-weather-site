import React, { useEffect } from "react";
import { useSelector, useDispatch } from "../../hooks";
import { fiveDaysForecast } from "../../utils/data";
import { TodayForecast } from "../../components/todayForecast";
import styles from "./mainPage.module.scss";
import { ForecastType } from "../../types";
import { DailyForecast } from "../../components/dailyForecast";
import { Search } from "../../components/search";
import { Star } from "../../components/star";
import { MeasureButton } from "../../components/measureButton";
import {
  getCurrentForecast,
  getWeekForecast,
} from "../../redux/actions/mainActions";

export const MainPage = () => {
  const dispatch = useDispatch();

  const { currentLocation, weekForecast } = useSelector(
    (store) => store.MainReducer
  );
  const measure = useSelector((store) => store.ParametersReducer.measure);
  const options = useSelector((store) => store.SearchReducer.optionsList);

  const isMetric = measure === "metric";

  useEffect(() => {
    dispatch(getCurrentForecast(currentLocation.key));
    dispatch(getWeekForecast(currentLocation.key));
  }, [currentLocation, dispatch]);

  return (
    <section className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.back_circle}></div>
      <div className={styles.main}>
        <MeasureButton />
        <div className={styles.content}>
          <div className={styles.current_box}>
            <div className={styles.search_box}>
              <Star />
              <Search options={options} />
            </div>
            <TodayForecast isMetric={isMetric} />
          </div>
          <div className={styles.week_box}>
            {weekForecast
              ? weekForecast.map((weather: ForecastType, index) => (
                  <div key={index} className={styles.weather_block}>
                    <DailyForecast weather={weather} isMetric={isMetric} />
                  </div>
                ))
              : fiveDaysForecast.map((weather: ForecastType, index) => (
                  <div key={index} className={styles.weather_block}>
                    <DailyForecast weather={weather} isMetric={isMetric} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};
