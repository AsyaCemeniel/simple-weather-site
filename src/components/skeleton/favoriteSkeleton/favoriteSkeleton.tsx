import React from "react";
import styles from "./favoriteSkeleton.module.scss";
import { Skeleton } from "../skeleton";

export const FavoriteSkeleton = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.today}>
            <Skeleton parameters={{ width: "153px", height: "45px" }} />
            <Skeleton
              parameters={{
                width: "60px",
                height: "35px",
                marginTop: "10px",
              }}
            />
          </div>
          <div className={styles.icon}>
            <Skeleton
              parameters={{
                width: "190px",
                height: "190px",
                borderRadius: "50%",
                marginTop: "10px",
              }}
            />
          </div>
          <div className={styles.temperature}>
            <Skeleton
              parameters={{
                width: "36px",
                height: "40px",
                marginTop: "10px",
              }}
            />
            <Skeleton
              parameters={{
                width: "110px",
                height: "40px",
                marginTop: "10px",
              }}
            />
          </div>
          <Skeleton
            parameters={{ width: "120px", height: "40px", marginTop: "10px" }}
          />
        </div>
      </div>
    </section>
  );
};
