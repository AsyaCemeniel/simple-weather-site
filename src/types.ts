import { icons } from "./utils/data";
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { store } from "./redux/store";
import { MainActions } from "./redux/actions/mainActions";
import { FavoritesActions } from "./redux/actions/favoritesActions";
import { ParametersActions } from "./redux/actions/parametersActions";
import { SearchActions } from "./redux/actions/searchActions";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type AppActions =
  | MainActions
  | FavoritesActions
  | ParametersActions
  | SearchActions;

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, AppActions>
>;

export type TempType = {
  c: number;
  f: number;
};

export type TodayForecastType = {
  weekDay: string;
  date: string;
  icon: IconType;
  weatherText: string;
  currentTemp: TempType;
  maxTemp: TempType;
  minTemp: TempType;
  humidity: number;
  wind: { m: string; i: string };
};

export type ForecastType = {
  date: string;
  weekDay: string;
  icon: IconType;
  maxTemp: TempType;
  minTemp: TempType;
  weatherText: string;
};

type IconsType = typeof icons;

type IconType = keyof IconsType;

export type LocationType = {
  key: string;
  city: string;
  country: string;
};

export type favoriteType = {
  location: LocationType;
  icon: IconType;
  currentTemp: TempType;
  maxTemp: TempType;
  minTemp: TempType;
  weatherText: string;
};

export type DailyResponseType = {
  Date: string;
  EpochDate: number;
  Temperature: {
    Minimum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Maximum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  };
  Day: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
  };
  Night: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
  };
  Sources: [string];
  MobileLink: string;
  Link: string;
};

export type SearchResponseType = {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: {
    ID: string;
    LocalizedName: string;
  };
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
  };
};
