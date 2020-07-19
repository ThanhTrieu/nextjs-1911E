import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_DATA_WEATHER } from '../actions/constant';
import {
  loadingGetDataWeather,
  getDataWeatherSuccess,
  getDataWeatherFailure
} from '../actions/weather';
import { api } from '../service/api';

function* getDataWeatherSaga({ city }){
  try {
    yield put(loadingGetDataWeather(true));
    const weather = yield call(api.getDataWeather, city);
    if(weather){
      yield put(getDataWeatherSuccess(weather));
    } else {
      yield put(getDataWeatherFailure('not found data'));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* watchGetDataWeatherSaga(){
  yield takeLatest(GET_DATA_WEATHER, getDataWeatherSaga);
}