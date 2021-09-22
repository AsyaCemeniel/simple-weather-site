import React, { FC, useState } from "react";
import styles from "./search.module.scss";
import blueSearch from "../../icons/blue_search.svg";
import { LocationType } from "../../types";

type PropsType = {
  options: LocationType[];
};

export const Search: FC<PropsType> = ({ options }) => {
  const [currentLocation, setLocation] = useState("London");
  const [display, setDisplay] = useState(false);

  const HandelClick = (city: string) => {
    setLocation(city);
    setDisplay(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <input
          type="text"
          value={currentLocation}
          onClick={() => setDisplay(!display)}
          onChange={(e) => setLocation(e.target.value)}
        />
        <img src={blueSearch} alt="search icon" />
        {display && (
          <div className={styles.dropdown}>
            {options &&
              options.map((location: LocationType, index) => (
                <div
                  key={index}
                  className={styles.option}
                  onClick={() => HandelClick(location.city)}
                >
                  <span className={styles.city}>{location.city}</span>
                  <span className={styles.country}>{location.country}</span>
                </div>
              ))}
          </div>
        )}
      </div>
      <div className={styles.current_location}>
        <span>{currentLocation}</span>
      </div>
    </div>
  );
};
