import {
  INCREMENT_NUMBER,
  DECREMENT_NUMBER
} from './constant';

export const changeIncrementNumber = (val) => ({
  type: INCREMENT_NUMBER,
  val
});

export const changeDecrementNumber = (val) => ({
  type: DECREMENT_NUMBER,
  val
});