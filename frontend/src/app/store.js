import { configureStore } from '@reduxjs/toolkit';
import apiReducer from '../features/apiSlice';
import cartReducer from '../features/cartSlice';
export const store = configureStore({
  reducer: {
    books: apiReducer,
    cart : cartReducer,
  },
  
});
