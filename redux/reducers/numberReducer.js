import {
  INCREMENT_NUMBER,
  DECREMENT_NUMBER
} from '../actions/constant';

export const initialState = {
  count: 0
}

const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_NUMBER:
      return {
        ...state,
        ...{ count : action.val + 1}
      }
    case DECREMENT_NUMBER:
      return {
        ...state,
        ...{ count : action.val - 1}
      }
    default:
      return state;
  }
}
export default numberReducer;