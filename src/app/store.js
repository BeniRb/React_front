import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice'
import cartSlice from './CartSlice';
import productReducer from './productSlice'



export const store = configureStore({
  reducer: {
    login:loginReducer,
    product:productReducer,
    cart:cartSlice,
  },
});
