import { ForecastType, TodayForecastType } from "../../types";

type MainState = {
  currentLocationKey: string;
  currentForecast: TodayForecastType | null;
  currentForecastRequest: boolean;
  currentForecastFailure: boolean;
  weekForecast: ForecastType[] | null;
  weekForecastRequest: boolean;
  weekForecastFailure: boolean;
};

const initialState: MainState = {
  currentLocationKey: "328328",

  currentForecast: null,
  currentForecastRequest: false,
  currentForecastFailure: false,

  weekForecast: null,
  weekForecastRequest: false,
  weekForecastFailure: false,
};

export const MainReducer = (state = initialState): MainState => {
  return state;
};
