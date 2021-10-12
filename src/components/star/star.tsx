import React, { useEffect, useState } from "react";
import {
  useSelector,
  useDispatch,
  useStateWithLocalStorage,
} from "../../hooks";
import styles from "./star.module.scss";
import star from "../../icons/star.svg";
import { ADD_OR_REMOVE_FAVORITES } from "../../redux/actions/favoritesActions";

export const Star = () => {
  const dispatch = useDispatch();
  const [isActive, setActive] = useState(false);
  const [value, setValue] = useStateWithLocalStorage("favorites");

  const favorites = useSelector((store) => store.FavoritesReducer.favorites);
  const currentLocation = useSelector(
    (store) => store.MainReducer.currentLocation
  );

  const isFavorites = Boolean(
    favorites.find((location) => {
      return location.key === currentLocation.key;
    })
  );

  useEffect(() => {
    if (favorites.length === 0 && value) {
      dispatch({
        type: ADD_OR_REMOVE_FAVORITES,
        payload: JSON.parse(value),
      });
    }
  }, []);

  useEffect(() => {
    setActive(isFavorites);
  }, [isFavorites]);

  const handelClick = () => {
    setActive((prevState) => !prevState);
    if (!isActive) {
      const result = [...favorites, currentLocation];

      dispatch({
        type: ADD_OR_REMOVE_FAVORITES,
        payload: result,
      });
      setValue(JSON.stringify(result));
    } else {
      const result = favorites.filter(
        (location) => location.key !== currentLocation.key
      );

      dispatch({
        type: ADD_OR_REMOVE_FAVORITES,
        payload: result,
      });
      setValue(JSON.stringify(result));
    }
  };

  return (
    <div className={styles.container}>
      <img
        src={star}
        alt="full star img"
        onClick={handelClick}
        className={`${styles.star} ${
          isActive ? styles.full_star : styles.empty_star
        }`}
      />
    </div>
  );
};
