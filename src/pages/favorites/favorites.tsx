import React, { useState } from "react";
import styles from "./favorites.module.scss";
import { MeasureButton } from "../../components/measureButton";

export const Favorites = () => {
  const [isMetric, setIsMetric] = useState(true);

  const handleMetricSwitch = () => {
    setIsMetric((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <MeasureButton isMetric={isMetric} switcher={handleMetricSwitch} />
        <div className={styles.favorites}>
          <span>Favorite location</span>
          <span>Favorite location</span>
          <span>Favorite location</span>
        </div>
      </div>
    </div>
  );
};
