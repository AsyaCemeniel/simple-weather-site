import { icons } from "./utils/data";

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
  city: string;
  country: string;
};

export type favoriteType = {
  location: LocationType;
  icon: IconType;
  maxTemp: TempType;
  minTemp: TempType;
  weatherText: string;
};
