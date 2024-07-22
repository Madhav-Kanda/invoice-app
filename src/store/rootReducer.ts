// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import someReducer from '../store/someSlice';

const rootReducer = combineReducers({
  some: someReducer,
});

export default rootReducer;
