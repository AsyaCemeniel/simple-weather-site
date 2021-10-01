import { LocationType } from "../../types";

export const GET_OPTIONS_LIST_REQUEST = "GET_OPTIONS_LIST_REQUEST" as const;
export const GET_OPTIONS_LIST_SUCCESS = "GET_OPTIONS_LIST_SUCCESS" as const;
export const GET_OPTIONS_LIST_FAILURE = "GET_OPTIONS_LIST_FAILURE" as const;

export interface IGetOptionsListRequest {
  readonly type: typeof GET_OPTIONS_LIST_REQUEST;
}

export interface IGetOptionsListSuccess {
  readonly type: typeof GET_OPTIONS_LIST_SUCCESS;
  payload: LocationType[];
}

export interface IGetOptionsListFailure {
  readonly type: typeof GET_OPTIONS_LIST_FAILURE;
}

export type SearchActions =
  | IGetOptionsListRequest
  | IGetOptionsListSuccess
  | IGetOptionsListFailure;
