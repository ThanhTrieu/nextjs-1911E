import {
  LOADING_WEATHER,
  GET_DATA_WEATHER_SUCCESS,
  GET_DATA_WEATHER_FAILURE
} from '../actions/constant';

const initialState = {
  loadingWeather: false,
  dataWeather: [],
  errorWeather: null
}

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_WEATHER:
      return {
        ...state,
        ...{ loading: action.loading }
      }
    case GET_DATA_WEATHER_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          dataWeather: action.weather
        }
      }
    case GET_DATA_WEATHER_FAILURE:
      return {
        ...state,
        ...{
          loading: false,
          dataWeather: [],
          errorWeather: action.error
        }
      }
    default:
      return state;
  }
}