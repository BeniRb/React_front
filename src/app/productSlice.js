import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts ,addProduct,updProduct,delProduct} from './productsAPI';

const initialState = {
    products: []
};


export const getProductsAsync = createAsyncThunk(
    'product/getProducts',
    async (token) => {
        const response = await getProducts(token);
        return response.data;
    }
);

export const addProductAsync = createAsyncThunk(
    "product/addProduct",
    async (data) => {
      const response = await addProduct(data);
      return response.data;
    }
  );

  export const updProductAsync = createAsyncThunk(
    "product/updProduct",
    async (updprod) => {
      const response = await updProduct(updprod,updprod.id);
      return response.data;
    }
  );

  export const delProductAsync = createAsyncThunk(
    "product/delProduct",
     async (id) => {
      const response = await delProduct(id)
      return id;
    })





export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      remove: (state, action) => {
           state.products = state.products.filter((x) => x.desc !== action.payload);}
    },
    //  async  (3)
    //   happens when async done - callback
    extraReducers: (builder) => {
        builder
            .addCase(getProductsAsync.fulfilled, (state, action) => {
                state.products= action.payload
            })
            .addCase(addProductAsync.fulfilled, (state, action) => {
                state.products.push(action.payload);
              })
              .addCase(updProductAsync.fulfilled, (state, action) => {
                let updprod= action.payload
                let oldprod=state.products.find((x) => x.id===updprod.id)
                oldprod.desc=action.payload.desc
                oldprod.price=updprod.price
                oldprod.category=updprod.category
                // oldprod.quantity=updprod.quantity
              
                .addCase(delProductAsync.fulfilled, (state, action) => {
                  state.products = state.products.filter((remprod) => remprod.id !== action.payload);
                });
              });

            
    },
});

// export sync method
export const { remove } = productSlice.actions;

// export any part of the state
export const selectProducts = (state) => state.product.products;
export const selectAmount = (state) => state.product.amount
// export the reducer to the applicaion
export default productSlice.reducer;

