import { favoriteType } from "../../types";
import {
  FavoritesActions,
  GET_FAVORITES_LIST_FAILURE,
  GET_FAVORITES_LIST_REQUEST,
  GET_FAVORITES_LIST_SUCCESS,
} from "../actions/favoritesActions";

type FavoritesState = {
  favoritesList: favoriteType[] | null;
  favoritesListRequest: boolean;
  favoritesListFailure: boolean;
};

const initialState: FavoritesState = {
  favoritesList: null,
  favoritesListRequest: false,
  favoritesListFailure: false,
};

export const FavoritesReducer = (
  state = initialState,
  action: FavoritesActions
): FavoritesState => {
  switch (action.type) {
    case GET_FAVORITES_LIST_REQUEST:
      return {
        ...state,
        favoritesListRequest: true,
      };
    case GET_FAVORITES_LIST_SUCCESS:
      return {
        ...state,
        favoritesListRequest: false,
        favoritesList: action.payload,
      };
    case GET_FAVORITES_LIST_FAILURE:
      return {
        ...state,
        favoritesListRequest: false,
        favoritesListFailure: true,
      };
    default:
      return state;
  }
};
