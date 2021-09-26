import React from "react";
import { Link } from "react-router-dom";
import { ThemeButton } from "../themeButton";
import styles from "./header.module.scss";
import star from "../../icons/star.svg";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.main}>
        <Link to="/simple-weather-site" className={styles.logo}>
          <span>*Your Weather</span>
        </Link>
        <div className={styles.control}>
          <div className={styles.favorites}>
            <img src={star} alt="star img" />
            <Link to="/favorites">Favorites</Link>
          </div>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};
