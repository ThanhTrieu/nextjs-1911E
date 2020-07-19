import {
  LOADING_WEATHER,
  GET_DATA_WEATHER,
  GET_DATA_WEATHER_SUCCESS,
  GET_DATA_WEATHER_FAILURE
} from './constant';

export const loadingGetDataWeather = (loading) => ({
  type: LOADING_WEATHER,
  loading
});

export const getDataWeatherFromApi = (city) => ({
  type: GET_DATA_WEATHER,
  city
});

export const getDataWeatherSuccess = (weather) => ({
  type: GET_DATA_WEATHER_SUCCESS,
  weather
});

export const getDataWeatherFailure = (error) => ({
  type: GET_DATA_WEATHER_FAILURE,
  error
});