import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { sendOrders } from './OrderAPI';
const initialState = {
    orderList:[],
    orderDetailList :[],
    value: 0,
    status: 'idle',
  };

export const addOrderAsync = createAsyncThunk('order/sendOrders',async (payload) => {
    const response = await sendOrders(payload.myCart, payload.token);
    // console.log(response.data);
    return response.data;
  }
);

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        },
    extraReducers: (builder) => {
      builder
        .addCase(addOrderAsync.fulfilled, (state, action) => {
          state.status = 'Done';
          // console.log(action.payload);
          // state.cartList =[...state.cartList,action.payload];
        },) },});
  export const selectOrderList = (state) => state.order.orderList;
  export const selectOrderDetailList = (state) => state.order.orderDetailList;
  
  export default orderSlice.reducer;