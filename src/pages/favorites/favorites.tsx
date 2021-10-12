import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./favorites.module.scss";
import { useSelector, useDispatch } from "../../hooks";
import { MeasureButton } from "../../components/measureButton";
import { favoriteType, LocationType } from "../../types";
import { FavoriteLocation } from "../../components/favoriteLocation";
import {
  ADD_OR_REMOVE_FAVORITES,
  CLEAR_FAVORITES_LIST,
  getFavoriteForecast,
} from "../../redux/actions/favoritesActions";
import { SET_LOCATION } from "../../redux/actions/mainActions";

export const Favorites = () => {
  const dispatch = useDispatch();
  const measure = useSelector((store) => store.ParametersReducer.measure);
  const isMetric = measure === "metric";

  const { favoritesList, favorites } = useSelector(
    (store) => store.FavoritesReducer
  );
  const favoritesFromStorage = localStorage.getItem("favorites");

  console.log("FAVORITES - ", favoritesList);
  useEffect(() => {
    dispatch({
      type: CLEAR_FAVORITES_LIST,
    });

    if (favorites.length === 0 && favoritesFromStorage) {
      dispatch({
        type: ADD_OR_REMOVE_FAVORITES,
        payload: JSON.parse(favoritesFromStorage),
      });
    }

    favorites.map((location) => {
      dispatch(getFavoriteForecast(location));
    });
  }, [favorites]);

  const handleClick = (location: LocationType) => {
    dispatch({
      type: SET_LOCATION,
      payload: location,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <MeasureButton />
        <div className={styles.favorites}>
          {favoritesList.map((location: favoriteType, index) => (
            <Link to="/simple-weather-site" key={index}>
              <div
                className={styles.favorite}
                onClick={() => handleClick(location.location)}
              >
                <FavoriteLocation favorite={location} isMetric={isMetric} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
