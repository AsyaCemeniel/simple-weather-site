import { AppDispatch, AppThunk, favoriteType, LocationType } from "../../types";
import { getCurrentWeather } from "../../utils/api";

export const GET_FAVORITES_LIST_REQUEST = "GET_FAVORITES_LIST_REQUEST" as const;
export const GET_FAVORITES_LIST_SUCCESS = "GET_FAVORITES_LIST_SUCCESS" as const;
export const GET_FAVORITES_LIST_FAILURE = "GET_FAVORITES_LIST_FAILURE" as const;

export const CLEAR_FAVORITES_LIST = "CLEAR_FAVORITES_LIST" as const;

export const ADD_OR_REMOVE_FAVORITES = "ADD_OR_REMOVE_FAVORITES" as const;

export interface IGetFavoritesListRequest {
  readonly type: typeof GET_FAVORITES_LIST_REQUEST;
}

export interface IGetFavoritesListSuccess {
  readonly type: typeof GET_FAVORITES_LIST_SUCCESS;
  payload: favoriteType;
}

export interface IGetFavoritesListFailure {
  readonly type: typeof GET_FAVORITES_LIST_FAILURE;
}

export interface IClearFavoritesList {
  readonly type: typeof CLEAR_FAVORITES_LIST;
}

export interface IAddOrRemoveFavorites {
  readonly type: typeof ADD_OR_REMOVE_FAVORITES;
  payload: LocationType[];
}

export type FavoritesActions =
  | IGetFavoritesListRequest
  | IGetFavoritesListSuccess
  | IGetFavoritesListFailure
  | IClearFavoritesList
  | IAddOrRemoveFavorites;

export const getFavoriteForecast: AppThunk = (location: LocationType) => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: GET_FAVORITES_LIST_REQUEST,
    });

    try {
      const res = await getCurrentWeather(location.key);

      const data = res[0];

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

      dispatch({
        type: GET_FAVORITES_LIST_SUCCESS,
        payload: {
          location,
          icon: data?.WeatherIcon,
          currentTemp,
          maxTemp,
          minTemp,
          weatherText: data?.WeatherText,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_FAVORITES_LIST_FAILURE,
      });
      console.error("There is a problem with FAVORITES LIST request", error);
    }
  };
};
