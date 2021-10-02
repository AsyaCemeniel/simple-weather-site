import { ForecastType, TodayForecastType } from "../../types";
import {
  GET_CURRENT_FORECAST_FAILURE,
  GET_CURRENT_FORECAST_REQUEST,
  GET_CURRENT_FORECAST_SUCCESS,
  GET_WEEK_FORECAST_FAILURE,
  GET_WEEK_FORECAST_REQUEST,
  GET_WEEK_FORECAST_SUCCESS,
  MainActions,
  SET_LOCATION_KEY,
} from "../actions/mainActions";

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

export const MainReducer = (
  state = initialState,
  action: MainActions
): MainState => {
  switch (action.type) {
    case GET_CURRENT_FORECAST_REQUEST:
      return {
        ...state,
        currentForecastRequest: true,
      };
    case GET_CURRENT_FORECAST_SUCCESS:
      return {
        ...state,
        currentForecastRequest: false,
        currentForecast: action.payload,
      };
    case GET_CURRENT_FORECAST_FAILURE:
      return {
        ...state,
        currentForecastRequest: false,
        currentForecastFailure: true,
      };
    case GET_WEEK_FORECAST_REQUEST:
      return {
        ...state,
        weekForecastRequest: true,
      };
    case GET_WEEK_FORECAST_SUCCESS:
      return {
        ...state,
        weekForecast: action.payload,
        weekForecastRequest: false,
      };
    case GET_WEEK_FORECAST_FAILURE:
      return {
        ...state,
        weekForecastRequest: false,
        weekForecastFailure: true,
      };
    case SET_LOCATION_KEY:
      return {
        ...state,
        currentLocationKey: action.payload,
      };
    default:
      return state;
  }
};
