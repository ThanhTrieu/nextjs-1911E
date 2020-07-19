import {call, all} from 'redux-saga/effects';
import { watchGetDataWeatherSaga } from './weatherSaga';

const rootSaga = () => {
  yield all([
    call(watchGetDataWeatherSaga)
  ])
}
export default rootSaga;