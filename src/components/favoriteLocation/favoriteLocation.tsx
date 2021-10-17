import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "../../hooks";
import { ADD_OR_REMOVE_FAVORITES } from "../../redux/actions/favoritesActions";
import { SET_LOCATION } from "../../redux/actions/mainActions";
import { favoriteType } from "../../types";
import { icons } from "../../utils/data";
import { Skeleton } from "../skeleton";
import styles from "./favoriteLocation.module.scss";

type PropsType = {
  favorite: favoriteType;
  isMetric: boolean;
};

export const FavoriteLocation: FC<PropsType> = ({ favorite, isMetric }) => {
  const dispatch = useDispatch();
  const { favorites, favoritesListRequest, favoritesListFailure } = useSelector(
    (store) => store.FavoritesReducer
  );

  const { location, icon, currentTemp, maxTemp, minTemp, weatherText } =
    favorite;

  const currentIcon = icons[icon];
  const minMaxTemp = isMetric
    ? maxTemp.c + "°C / " + minTemp.c + "°C"
    : maxTemp.f + "°F / " + minTemp.f + "°F";

  const handleClick = () => {
    dispatch({
      type: SET_LOCATION,
      payload: location,
    });
  };

  const handleDeleteClick = () => {
    const result = favorites.filter(
      (favLocation) => favLocation.key !== location.key
    );

    dispatch({
      type: ADD_OR_REMOVE_FAVORITES,
      payload: result,
    });

    localStorage.setItem("favorites", JSON.stringify(result));
  };

  if (favoritesListRequest || favoritesListFailure) {
    console.log("SKELETON!!!");
    return (
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.today}>
              <Skeleton parameters={{ width: "153px", height: "45px" }} />
              <Skeleton
                parameters={{
                  width: "60px",
                  height: "35px",
                  marginTop: "10px",
                }}
              />
            </div>
            <div className={styles.icon}>
              <Skeleton
                parameters={{
                  width: "190px",
                  height: "190px",
                  borderRadius: "50%",
                  marginTop: "10px",
                }}
              />
            </div>
            <div className={styles.temperature}>
              <Skeleton
                parameters={{
                  width: "36px",
                  height: "40px",
                  marginTop: "10px",
                }}
              />
              <Skeleton
                parameters={{
                  width: "110px",
                  height: "40px",
                  marginTop: "10px",
                }}
              />
            </div>
            <Skeleton
              parameters={{ width: "120px", height: "40px", marginTop: "10px" }}
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.wrapper}>
      <Link to="/simple-weather-site">
        <div className={styles.container} onClick={handleClick}>
          <div className={styles.main}>
            <div className={styles.today}>
              <span className={styles.city}>{location.city}</span>
              <span className={styles.country}>{location.country}</span>
            </div>
            <div className={styles.icon}>
              <img src={currentIcon} alt="weather icon" />
            </div>
            <div className={styles.temperature}>
              <div>
                {isMetric ? currentTemp.c + "°C" : currentTemp.f + "°F"}
              </div>
              <div>{minMaxTemp}</div>
            </div>
            <div className={styles.weather}>{weatherText}</div>
          </div>
        </div>
      </Link>
      <button className={styles.delete_btn} onClick={handleDeleteClick}>
        X
      </button>
    </section>
  );
};
