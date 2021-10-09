import React, { useEffect } from "react";
import {
  useSelector,
  useDispatch,
  useStateWithLocalStorage,
} from "../../hooks";
import { SET_MEASURE } from "../../redux/actions/parametersActions";
import styles from "./measureButton.module.scss";

export const MeasureButton = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useStateWithLocalStorage("measure");

  const measure = useSelector((store) => store.ParametersReducer.measure);
  const isMetric = measure === "metric";

  useEffect(() => {
    if (value) {
      dispatch({
        type: SET_MEASURE,
        payload: value,
      });
    }
  }, []);

  const switcher = () => {
    dispatch({
      type: SET_MEASURE,
      payload: isMetric ? "imperial" : "metric",
    });
    setValue(isMetric ? "imperial" : "metric");
  };

  const buttonText = isMetric ? "F" : "C";

  return (
    <div className={styles.button}>
      <button onClick={switcher}>
        <span>°</span> {buttonText}
      </button>
    </div>
  );
};
