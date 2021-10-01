import { ForecastType, TodayForecastType } from "../../types";

export const GET_CURRENT_FORECAST_REQUEST =
  "GET_CURRENT_FORECAST_REQUEST" as const;
export const GET_CURRENT_FORECAST_SUCCESS =
  "GET_CURRENT_FORECAST_SUCCESS" as const;
export const GET_CURRENT_FORECAST_FAILURE =
  "GET_CURRENT_FORECAST_FAILURE" as const;

export const GET_WEEK_FORECAST_REQUEST = "GET_WEEK_FORECAST_REQUEST" as const;
export const GET_WEEK_FORECAST_SUCCESS = "GET_WEEK_FORECAST_SUCCESS" as const;
export const GET_WEEK_FORECAST_FAILURE = "GET_WEEK_FORECAST_FAILURE" as const;

export const SET_LOCATION_KEY = "SET_LOCATION_KEY" as const;

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
  readonly type: typeof SET_LOCATION_KEY;
  payload: string;
}

export type MainActions =
  | IGetCurrentForecastRequest
  | IGetCurrentForecastSuccess
  | IGetCurrentForecastFailure
  | IGetWeekForecastRequest
  | IGetWeekForecastSuccess
  | IGetWeekForecastFailure
  | ISetLocationKey;
