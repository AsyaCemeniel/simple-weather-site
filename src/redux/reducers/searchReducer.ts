import { LocationType } from "../../types";

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

export const SearchReducer = (state = initialState): SearchState => {
  return state;
};
