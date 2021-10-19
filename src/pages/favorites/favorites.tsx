import React, { useEffect } from "react";
import styles from "./favorites.module.scss";
import { useSelector, useDispatch } from "../../hooks";
import { MeasureButton } from "../../components/measureButton";
import { favoriteType } from "../../types";
import { FavoriteLocation } from "../../components/favoriteLocation";
import { FavoriteSkeleton } from "../../components/skeleton";
import {
  ADD_OR_REMOVE_FAVORITES,
  CLEAR_FAVORITES_LIST,
  getFavoriteForecast,
} from "../../redux/actions/favoritesActions";

export const Favorites = () => {
  const dispatch = useDispatch();
  const measure = useSelector((store) => store.ParametersReducer.measure);
  const isMetric = measure === "metric";

  const { favoritesList, favorites } = useSelector(
    (store) => store.FavoritesReducer
  );
  const favoritesFromStorage = localStorage.getItem("favorites");

  const isLoading = favorites.length !== favoritesList.length;

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

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <MeasureButton />
        <div className={styles.favorites}>
          {isLoading
            ? favorites.map((item, index) => (
                <div className={styles.favorite} key={index}>
                  <FavoriteSkeleton />
                </div>
              ))
            : favoritesList.map((location: favoriteType, index) => (
                <div className={styles.favorite} key={index}>
                  <FavoriteLocation favorite={location} isMetric={isMetric} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
