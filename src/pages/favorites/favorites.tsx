import React, { useState } from "react";
import styles from "./favorites.module.scss";
import { MeasureButton } from "../../components/measureButton";
import { favoriteLocations } from "../../utils/data";
import { favoriteType } from "../../types";
import { FavoriteLocation } from "../../components/favoriteLocation";

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
          {favoriteLocations.map((location: favoriteType, index) => (
            <div className={styles.favorite} key={index}>
              <FavoriteLocation favorite={location} isMetric={isMetric} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
