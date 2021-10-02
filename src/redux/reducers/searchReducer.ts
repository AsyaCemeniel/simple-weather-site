import { LocationType } from "../../types";
import {
  GET_OPTIONS_LIST_FAILURE,
  GET_OPTIONS_LIST_REQUEST,
  GET_OPTIONS_LIST_SUCCESS,
  SearchActions,
} from "../actions/searchActions";

type SearchState = {
  optionsList: LocationType[] | null;
  optionsListRequest: boolean;
  optionsListFailure: boolean;
};

const initialState: SearchState = {
  optionsList: null,
  optionsListRequest: false,
  optionsListFailure: false,
};

export const SearchReducer = (
  state = initialState,
  action: SearchActions
): SearchState => {
  switch (action.type) {
    case GET_OPTIONS_LIST_REQUEST:
      return {
        ...state,
        optionsListRequest: true,
      };
    case GET_OPTIONS_LIST_SUCCESS:
      return {
        ...state,
        optionsListRequest: false,
        optionsList: action.payload,
      };
    case GET_OPTIONS_LIST_FAILURE:
      return {
        ...state,
        optionsListRequest: false,
        optionsListFailure: true,
      };
    default:
      return state;
  }
};
