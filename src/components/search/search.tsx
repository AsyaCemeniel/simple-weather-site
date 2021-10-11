import React, { FC, useEffect, useState } from "react";
import styles from "./search.module.scss";
import blueSearch from "../../icons/blue_search.svg";
import { LocationType } from "../../types";
import { useDebounce, useDispatch, useSelector } from "../../hooks";
import { SET_LOCATION } from "../../redux/actions/mainActions";
import {
  DELETE_OPTIONS_LIST,
  getOptionsList,
} from "../../redux/actions/searchActions";

type PropsType = {
  options: LocationType[] | null;
};

export const Search: FC<PropsType> = ({ options }) => {
  const currentLocationName = useSelector(
    (store) => store.MainReducer.currentLocation.city
  );

  const [currentLocation, setLocation] = useState("");
  const [display, setDisplay] = useState(false);
  const [locationName, setName] = useState(currentLocationName || "London");
  const searchValue = useDebounce(currentLocation);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchValue !== "") {
      dispatch(getOptionsList(searchValue));
    }
  }, [searchValue, dispatch]);

  const HandelClick = (location: LocationType) => {
    setName(location.city);
    setLocation("");
    setDisplay(false);

    dispatch({
      type: SET_LOCATION,
      payload: location,
    });
    dispatch({
      type: DELETE_OPTIONS_LIST,
    });
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
                  onClick={() => HandelClick(location)}
                >
                  <span className={styles.city}>{location.city}</span>
                  <span className={styles.country}>{location.country}</span>
                </div>
              ))}
          </div>
        )}
      </div>
      <div className={styles.current_location}>
        <span>{locationName}</span>
      </div>
    </div>
  );
};
