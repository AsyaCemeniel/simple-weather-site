import { LocationType } from "../../types";

type SearchState = {
  searchList: LocationType[] | null;
  searchListRequest: boolean;
  searchListFailure: boolean;
};

const initialState: SearchState = {
  searchList: null,
  searchListRequest: false,
  searchListFailure: false,
};

export const SearchReducer = (state = initialState): SearchState => {
  return state;
};
