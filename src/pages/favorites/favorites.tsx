import React from "react";
import styles from "./favorites.module.scss";
import { useSelector } from "../../hooks";
import { MeasureButton } from "../../components/measureButton";
import { favoriteLocations } from "../../utils/data";
import { favoriteType } from "../../types";
import { FavoriteLocation } from "../../components/favoriteLocation";

export const Favorites = () => {
  const measure = useSelector((store) => store.ParametersReducer.measure);
  const isMetric = measure === "metric";

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <MeasureButton />
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
