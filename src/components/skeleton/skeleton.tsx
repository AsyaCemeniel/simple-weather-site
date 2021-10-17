import React, { FC, CSSProperties } from "react";
import styles from "./skeleton.module.scss";

type PropsType = {
  parameters?: CSSProperties;
};

export const Skeleton: FC<PropsType> = ({ parameters }) => {
  return (
    <div
      className={styles.skeleton}
      style={parameters || { height: "45px" }}
    ></div>
  );
};
