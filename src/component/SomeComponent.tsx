// src/component/SomeComponent.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/someSlice';

const SomeComponent = () => {
  const value = useSelector((state: any) => state.some.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default SomeComponent;
