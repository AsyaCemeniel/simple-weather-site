import { favoriteType } from "../../types";

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

export const FavoritesReducer = (state = initialState): FavoritesState => {
  return state;
};
