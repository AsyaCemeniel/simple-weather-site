import React from "react";
import { ThemeButton } from "../themeButton";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.main}>
        <span className={styles.logo}>*Your Weather</span>
        <div>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};
