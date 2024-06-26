import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  cart: {},
  error: null,
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('getAllCartItemsRequest', (state) => {
      state.loading = true;
    })
    .addCase('getAllCartItemsSuccess', (state, action) => {
      state.loading = false;
      state.cart = action.payload;
      state.error = null;
    })
    .addCase('getAllCartItemsFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('addToCartItemsRequest', (state) => {
      state.loading = true;
    })
    .addCase('addToCartItemsSuccess', (state, action) => {
      state.loading = false;
      state.cart = action.payload;
      state.error = null;
    })
    .addCase('addToCartItemsFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});
