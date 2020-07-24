import {call, all} from 'redux-saga/effects';
import { watchGetDataWeatherSaga } from './weatherSaga';

export default function* rootSaga()  {
  yield all([
    call(watchGetDataWeatherSaga)
  ])
}