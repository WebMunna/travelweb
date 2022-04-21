import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import travelReducer from '../features/travelSlice';
export const store = configureStore({
  reducer: {
    travel: travelReducer
  },
});
