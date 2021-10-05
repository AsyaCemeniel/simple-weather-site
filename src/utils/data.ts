import {
  favoriteType,
  ForecastType,
  LocationType,
  TodayForecastType,
} from "../types";
import sunny from "../icons/sunny.svg";
import cloud_foggy from "../icons/cloud_foggy.svg";
import cloud_snowflake from "../icons/cloud_snowflake.svg";
import cloud from "../icons/cloud.svg";
import cloudy_lightning from "../icons/cloudy_lightning.svg";
import cloudy_moon from "../icons/cloudy_moon.svg";
import cloudy_sunny from "../icons/cloudy_sunny.svg";
import drop from "../icons/drop.svg";
import fog from "../icons/fog.svg";
import hot from "../icons/hot.svg";
import lightning from "../icons/lightning.svg";
import moon from "../icons/moon.svg";
import night_raining from "../icons/night_raining.svg";
import rain from "../icons/rain.svg";
import raining_sun from "../icons/raining_sun.svg";
import snow from "../icons/snow.svg";
import snowflake from "../icons/snowflake.svg";
import wind from "../icons/wind.svg";

export const options: LocationType[] = [
  { key: "328328", city: "London", country: "United Kingdom" },
  { key: "294927", city: "Vladivostok", country: "Russia" },
  { key: "215849", city: "Ramat Gan", country: "Israel" },
];

export const fiveDaysForecast: ForecastType[] = [
  {
    date: "8 Sep",
    weekDay: "Wednesday",
    icon: 4,
    maxTemp: { c: 27, f: 80 },
    minTemp: { c: 17, f: 62 },
    weatherText: "Intermittent clouds",
  },
  {
    date: "9 Sep",
    weekDay: "Thursday",
    icon: 11,
    maxTemp: { c: 22, f: 71 },
    minTemp: { c: 16, f: 60 },
    weatherText: "Foggy",
  },
  {
    date: "10 Sep",
    weekDay: "Friday",
    icon: 3,
    maxTemp: { c: 21, f: 69 },
    minTemp: { c: 15, f: 59 },
    weatherText: "Intermittent clouds",
  },
  {
    date: "11 Sep",
    weekDay: "Saturday",
    icon: 7,
    maxTemp: { c: 21, f: 69 },
    minTemp: { c: 13, f: 55 },
    weatherText: "Cloudy",
  },
];

export const todayForecast: TodayForecastType = {
  weekDay: "Tuesday",
  date: " 7 Sep",
  icon: 1,
  weatherText: "Sunny",
  currentTemp: { c: 25, f: 77 },
  maxTemp: { c: 28, f: 82 },
  minTemp: { c: 16, f: 60 },
  humidity: 57,
  wind: { m: "3.2 km/h", i: "5.4 mi/h" },
};

export const favoriteLocations: favoriteType[] = [
  {
    location: { key: "328328", city: "London", country: "United Kingdom" },
    icon: 18,
    currentTemp: { c: 20, f: 67 },
    maxTemp: { c: 21, f: 69 },
    minTemp: { c: 13, f: 55 },
    weatherText: "Rainy",
  },
  {
    location: { key: "294927", city: "Vladivostok", country: "Russia" },
    icon: 11,
    currentTemp: { c: 21, f: 69 },
    maxTemp: { c: 21, f: 69 },
    minTemp: { c: 19, f: 62 },
    weatherText: "Foggy",
  },
  {
    location: { key: "215849", city: "Ramat Gan", country: "Israel" },
    icon: 1,
    currentTemp: { c: 29, f: 84 },
    maxTemp: { c: 31, f: 93 },
    minTemp: { c: 23, f: 72 },
    weatherText: "Sunny",
  },
  {
    location: { key: "48989", city: "Winnipeg", country: "Canada" },
    icon: 33,
    currentTemp: { c: 20, f: 69 },
    maxTemp: { c: 29, f: 84 },
    minTemp: { c: 13, f: 56 },
    weatherText: "Clear",
  },
];

export const icons = {
  1: sunny,
  2: sunny,
  3: cloudy_sunny,
  4: cloudy_sunny,
  5: cloudy_sunny,
  6: cloud,
  7: cloud,
  8: cloud_foggy,
  11: fog,
  12: drop,
  13: raining_sun,
  14: raining_sun,
  15: cloudy_lightning,
  16: lightning,
  17: lightning,
  18: rain,
  19: snow,
  20: raining_sun,
  21: raining_sun,
  22: cloud_snowflake,
  23: cloud_snowflake,
  24: snowflake,
  25: snow,
  26: rain,
  29: snow,
  30: hot,
  31: snowflake,
  32: wind,
  33: moon,
  34: moon,
  35: cloudy_moon,
  36: cloudy_moon,
  37: fog,
  38: cloudy_moon,
  39: night_raining,
  40: night_raining,
  41: lightning,
  42: cloudy_lightning,
  43: snow,
  44: cloud_snowflake,
};
