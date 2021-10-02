export const API_KEY = process.env.REACT_APP_API_KEY;
export const BASE_URL = "https://dataservice.accuweather.com";
export const AUTOCOMPLETE_SEARCH_URL = "/locations/v1/cities/autocomplete";
export const FIVE_DAYS_URL = "/forecasts/v1/daily/5day";
export const CURRENT_CONDITIONS_URL = "/currentconditions/v1";

const handleRequest = (res: Response) => {
  return res.ok
    ? res.json()
    : res.json().then((error) => Promise.reject(error));
};

export const getCurrentWeather = async (key: string) => {
  const res = await fetch(
    `${BASE_URL}${CURRENT_CONDITIONS_URL}/${key}?apikey=${API_KEY}&details=true`
  );
  return await handleRequest(res);
};

export const getFiveDaysWeather = async (key: string) => {
  const res = await fetch(
    `${BASE_URL}${FIVE_DAYS_URL}/${key}?apikey=${API_KEY}&metric=true`
  );
  return await handleRequest(res);
};

export const getSearchList = async (location: string) => {
  const res = await fetch(
    `${BASE_URL}${AUTOCOMPLETE_SEARCH_URL}?apikey=${API_KEY}&q=${location}`
  );
  return await handleRequest(res);
};
