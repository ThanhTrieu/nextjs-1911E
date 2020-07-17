import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { changeIncrementNumber } from '../../redux/actions/changeNumber';

export const Counter = () => {
  const count = useSelector(state => state.number.count)
  const dispatch = useDispatch();
  const changeNumber1 = (c) => {
    dispatch(changeIncrementNumber(c))
  }
  return (
    <>
      <button onClick={() => changeNumber1(count)}> + </button>
      <span> {count} </span>
      <button> - </button>
    </>
  )
}