import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  products: [],
  error: null,
};

export const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('getAllProductRequest', (state) => {
      state.loading = true;
    })
    .addCase('getAllProductSuccess', (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    })
    .addCase('getAllProductFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});
