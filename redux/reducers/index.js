import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import numberReducer from './numberReducer';
import { weatherReducer } from './weatherReducer';

const configRootPersist = {
  key: 'rootApp',
  storage: storage,
  whitelist: ['number']
}
const configPersistWeather = {
  key: 'ListDataWeathers',
  storage: storage,
  whitelist: ['dataWeather']
}

const rootReducer = combineReducers({
  number: numberReducer,
  weather: persistReducer(configPersistWeather,weatherReducer)
});
const rootPersistReducer = persistReducer(configRootPersist, rootReducer)
export default rootPersistReducer;