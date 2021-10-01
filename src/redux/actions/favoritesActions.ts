import { favoriteType } from "../../types";

export const GET_FAVORITES_LIST_REQUEST = "GET_FAVORITES_LIST_REQUEST" as const;
export const GET_FAVORITES_LIST_SUCCESS = "GET_FAVORITES_LIST_SUCCESS" as const;
export const GET_FAVORITES_LIST_FAILURE = "GET_FAVORITES_LIST_FAILURE" as const;

export interface IGetFavoritesListRequest {
  readonly type: typeof GET_FAVORITES_LIST_REQUEST;
}

export interface IGetFavoritesListSuccess {
  readonly type: typeof GET_FAVORITES_LIST_SUCCESS;
  payload: favoriteType[];
}

export interface IGetFavoritesListFailure {
  readonly type: typeof GET_FAVORITES_LIST_FAILURE;
}

export type FavoritesActions =
  | IGetFavoritesListRequest
  | IGetFavoritesListSuccess
  | IGetFavoritesListFailure;
