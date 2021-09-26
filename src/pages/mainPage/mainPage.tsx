import React, { useState } from "react";
import { TodayForecast } from "../../components/todayForecast";
import styles from "./mainPage.module.scss";
import { fiveDaysForecast, options } from "../../utils/data";
import { ForecastType } from "../../types";
import { DailyForecast } from "../../components/dailyForecast";
import { Search } from "../../components/search";
import { Star } from "../../components/star";
import { MeasureButton } from "../../components/measureButton";

export const MainPage = () => {
  const [isMetric, setIsMetric] = useState(true);

  const handleMetricSwitch = () => {
    setIsMetric((prevState) => !prevState);
  };

  return (
    <section className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.back_circle}></div>
      <div className={styles.main}>
        <MeasureButton isMetric={isMetric} switcher={handleMetricSwitch} />
        <div className={styles.content}>
          <div className={styles.current_box}>
            <div className={styles.search_box}>
              <Star />
              <Search options={options} />
            </div>
            <TodayForecast isMetric={isMetric} />
          </div>
          <div className={styles.week_box}>
            {fiveDaysForecast.map((weather: ForecastType, index) => (
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
