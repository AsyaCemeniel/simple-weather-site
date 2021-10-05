import {
  AppDispatch,
  AppThunk,
  LocationType,
  SearchResponseType,
} from "../../types";
import { getSearchList } from "../../utils/api";

export const GET_OPTIONS_LIST_REQUEST = "GET_OPTIONS_LIST_REQUEST" as const;
export const GET_OPTIONS_LIST_SUCCESS = "GET_OPTIONS_LIST_SUCCESS" as const;
export const GET_OPTIONS_LIST_FAILURE = "GET_OPTIONS_LIST_FAILURE" as const;
export const DELETE_OPTIONS_LIST = "DELETE_OPTIONS_LIST" as const;

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

export interface IDeleteOptionsList {
  readonly type: typeof DELETE_OPTIONS_LIST;
}

export type SearchActions =
  | IGetOptionsListRequest
  | IGetOptionsListSuccess
  | IGetOptionsListFailure
  | IDeleteOptionsList;

export const getOptionsList: AppThunk = (location: string) => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: GET_OPTIONS_LIST_REQUEST,
    });

    try {
      const res = await getSearchList(location);

      const options = res.map((option: SearchResponseType) => {
        return {
          key: option.Key,
          city: option.LocalizedName,
          country: option.Country?.LocalizedName,
        };
      });

      dispatch({
        type: GET_OPTIONS_LIST_SUCCESS,
        payload: options,
      });
    } catch (error) {
      dispatch({
        type: GET_OPTIONS_LIST_FAILURE,
      });
      console.error("There is a problem with OPTIONS LIST request", error);
    }
  };
};
