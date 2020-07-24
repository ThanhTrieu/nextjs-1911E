import { createSelector } from 'reselect';

const weatherState = state => state.weather;

export const loadingGetWeather = createSelector(
  weatherState,
  item => item.loadingWeather
);

export const dataWeatherApi = createSelector(
  weatherState,
  item => item.dataWeather
);