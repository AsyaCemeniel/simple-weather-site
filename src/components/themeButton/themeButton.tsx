import React, { useEffect, useState } from "react";
import {
  useSelector,
  useDispatch,
  useStateWithLocalStorage,
} from "../../hooks";
import styles from "./themeButton.module.scss";
import dark from "../../icons/space_moon.svg";
import light from "../../icons/space_sun.svg";
import { SET_THEME } from "../../redux/actions/parametersActions";

export const ThemeButton = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useStateWithLocalStorage("theme");

  const theme = useSelector((store) => store.ParametersReducer.theme);
  const isDark = theme === "dark";

  const themeIcon = isDark ? light : dark;
  const themeClass = isDark ? styles.dark : styles.light;

  useEffect(() => {
    if (value) {
      dispatch({
        type: SET_THEME,
        payload: value,
      });
    }
  }, []);

  const switcher = () => {
    dispatch({
      type: SET_THEME,
      payload: isDark ? "light" : "dark",
    });
    setValue(isDark ? "light" : "dark");
  };

  return (
    <div className={themeClass}>
      <img src={themeIcon} alt="theme img" onClick={switcher} />
    </div>
  );
};
