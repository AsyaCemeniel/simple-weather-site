import React, { FC } from "react";
import styles from "./measureButton.module.scss";

type PropsType = {
  isMetric: boolean;
  switcher: () => void;
};

export const MeasureButton: FC<PropsType> = ({ isMetric, switcher }) => {
  const buttonText = isMetric ? "F" : "C";

  return (
    <div className={styles.button}>
      <button onClick={switcher}>
        <span>°</span> {buttonText}
      </button>
    </div>
  );
};
