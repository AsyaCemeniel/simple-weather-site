import { combineReducers } from "redux";
import { MainReducer } from "./mainReducer";
import { FavoritesReducer } from "./favoritesReducer";
import { ParametersReducer } from "./parametersReducer";
import { SearchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
  MainReducer,
  FavoritesReducer,
  ParametersReducer,
  SearchReducer,
});
