// productDetailsReducer.js
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  product: {},
  error: null,
};

export const productDetailsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('getProductDetailsRequest', (state) => {
      state.loading = true;
    })
    .addCase('getProductDetailsSuccess', (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.error = null;
    })
    .addCase('getProductDetailsFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});
