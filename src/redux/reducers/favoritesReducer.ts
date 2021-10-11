import { favoriteType, LocationType } from "../../types";
import {
  ADD_OR_REMOVE_FAVORITES,
  CLEAR_FAVORITES_LIST,
  FavoritesActions,
  GET_FAVORITES_LIST_FAILURE,
  GET_FAVORITES_LIST_REQUEST,
  GET_FAVORITES_LIST_SUCCESS,
} from "../actions/favoritesActions";

type FavoritesState = {
  favorites: LocationType[] | [];
  favoritesList: favoriteType[] | [];
  favoritesListRequest: boolean;
  favoritesListFailure: boolean;
};

const initialState: FavoritesState = {
  favorites: [],
  favoritesList: [],
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
        favoritesList: [...state.favoritesList, action.payload],
      };
    case GET_FAVORITES_LIST_FAILURE:
      return {
        ...state,
        favoritesListRequest: false,
        favoritesListFailure: true,
      };
    case CLEAR_FAVORITES_LIST:
      return {
        ...state,
        favoritesList: [],
      };
    case ADD_OR_REMOVE_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
        favoritesList: [],
      };
    default:
      return state;
  }
};
