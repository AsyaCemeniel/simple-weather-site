import {
  AppDispatch,
  AppThunk,
  ForecastType,
  TodayForecastType,
  DailyResponseType,
  LocationType,
} from "../../types";
import { celsiusToFahrenheit } from "../../utils";
import { getCurrentWeather, getFiveDaysWeather } from "../../utils/api";

export const GET_CURRENT_FORECAST_REQUEST =
  "GET_CURRENT_FORECAST_REQUEST" as const;
export const GET_CURRENT_FORECAST_SUCCESS =
  "GET_CURRENT_FORECAST_SUCCESS" as const;
export const GET_CURRENT_FORECAST_FAILURE =
  "GET_CURRENT_FORECAST_FAILURE" as const;

export const GET_WEEK_FORECAST_REQUEST = "GET_WEEK_FORECAST_REQUEST" as const;
export const GET_WEEK_FORECAST_SUCCESS = "GET_WEEK_FORECAST_SUCCESS" as const;
export const GET_WEEK_FORECAST_FAILURE = "GET_WEEK_FORECAST_FAILURE" as const;

export const SET_LOCATION = "SET_LOCATION" as const;

export interface IGetCurrentForecastRequest {
  readonly type: typeof GET_CURRENT_FORECAST_REQUEST;
}

export interface IGetCurrentForecastSuccess {
  readonly type: typeof GET_CURRENT_FORECAST_SUCCESS;
  payload: TodayForecastType;
}

export interface IGetCurrentForecastFailure {
  readonly type: typeof GET_CURRENT_FORECAST_FAILURE;
}

export interface IGetWeekForecastRequest {
  readonly type: typeof GET_WEEK_FORECAST_REQUEST;
}

export interface IGetWeekForecastSuccess {
  readonly type: typeof GET_WEEK_FORECAST_SUCCESS;
  payload: ForecastType[];
}

export interface IGetWeekForecastFailure {
  readonly type: typeof GET_WEEK_FORECAST_FAILURE;
}

export interface ISetLocationKey {
  readonly type: typeof SET_LOCATION;
  payload: LocationType;
}

export type MainActions =
  | IGetCurrentForecastRequest
  | IGetCurrentForecastSuccess
  | IGetCurrentForecastFailure
  | IGetWeekForecastRequest
  | IGetWeekForecastSuccess
  | IGetWeekForecastFailure
  | ISetLocationKey;

export const getCurrentForecast: AppThunk = (locationKey: string) => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: GET_CURRENT_FORECAST_REQUEST,
    });

    try {
      const res = await getCurrentWeather(locationKey);

      if (res) {
        const data = res[0];
        const currentDay = new Date(data?.LocalObservationDateTime);
        const currentTemp = {
          c: Math.round(data?.Temperature?.Metric?.Value),
          f: Math.round(data?.Temperature?.Imperial?.Value),
        };
        const maxTemp = {
          c: Math.round(
            data?.TemperatureSummary?.Past24HourRange?.Maximum?.Metric?.Value
          ),
          f: Math.round(
            data?.TemperatureSummary?.Past24HourRange?.Maximum?.Imperial?.Value
          ),
        };
        const minTemp = {
          c: Math.round(
            data?.TemperatureSummary?.Past24HourRange?.Minimum?.Metric?.Value
          ),
          f: Math.round(
            data?.TemperatureSummary?.Past24HourRange?.Minimum?.Imperial?.Value
          ),
        };
        const wind = {
          m: String(data?.Wind?.Speed?.Metric?.Value) + " km/h",
          i: String(data?.Wind?.Speed?.Imperial?.Value) + " mi/h",
        };

        dispatch({
          type: GET_CURRENT_FORECAST_SUCCESS,
          payload: {
            weekDay: currentDay.toLocaleString("en-US", { weekday: "long" }),
            date: currentDay.toLocaleString("en-US", {
              day: "numeric",
              month: "short",
            }),
            icon: data?.WeatherIcon,
            weatherText: data?.WeatherText,
            currentTemp,
            maxTemp,
            minTemp,
            humidity: data?.RelativeHumidity,
            wind,
          },
        });
      } else {
        throw new Error("Response status is not OK");
      }
    } catch (error) {
      dispatch({
        type: GET_CURRENT_FORECAST_FAILURE,
      });
      console.error("There is a problem with CURRENT FORECAST request", error);
    }
  };
};

export const getWeekForecast: AppThunk = (locationKey: string) => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: GET_WEEK_FORECAST_REQUEST,
    });

    try {
      const res = await getFiveDaysWeather(locationKey);

      const data = res.DailyForecasts;
      data.shift();

      const weekForecast = data.map((day: DailyResponseType) => {
        const currentDay = new Date(day.Date);
        const maxTemp = {
          c: Math.round(day?.Temperature?.Maximum?.Value),
          f: Math.round(celsiusToFahrenheit(day?.Temperature?.Maximum?.Value)),
        };
        const minTemp = {
          c: Math.round(day?.Temperature?.Minimum?.Value),
          f: Math.round(celsiusToFahrenheit(day?.Temperature?.Minimum?.Value)),
        };
        return {
          date: currentDay.toLocaleString("en-US", {
            day: "numeric",
            month: "short",
          }),
          weekDay: currentDay.toLocaleString("en-US", { weekday: "long" }),
          icon: day?.Day?.Icon,
          maxTemp,
          minTemp,
          weatherText: day?.Day?.IconPhrase,
        };
      });

      dispatch({
        type: GET_WEEK_FORECAST_SUCCESS,
        payload: weekForecast,
      });
    } catch (error) {
      dispatch({
        type: GET_WEEK_FORECAST_FAILURE,
      });
      console.error("There is a problem with WEEK FORECAST request", error);
    }
  };
};
