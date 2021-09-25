import React, { useState } from "react";
import styles from "./themeButton.module.scss";
import dark from "../../icons/space_moon.svg";
import light from "../../icons/space_sun.svg";

export const ThemeButton = () => {
  const [theme, setTheme] = useState(false);

  const themeIcon = theme ? light : dark;
  const themeClass = theme ? styles.dark : styles.light;

  return (
    <div className={themeClass}>
      <img src={themeIcon} alt="theme img" onClick={() => setTheme(!theme)} />
    </div>
  );
};
