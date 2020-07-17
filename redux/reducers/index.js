import { combineReducers } from 'redux';
import { numberReducer as number } from './numberReducer';

const rootReducer = combineReducers({
  number
});

export default rootReducer;