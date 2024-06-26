import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  categories: [],
  error: null,
};

export const catReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('getCategoryRequest', (state) => {
      console.log('Reducer: getCategoryRequest');
      state.loading = true;
    })
    .addCase('getCategorySuccess', (state, action) => {
      console.log('Reducer: getCategorySuccess', action.payload);
      state.loading = false;
      state.categories = action.payload;
      state.error = null;
    })
    .addCase('getCategoryFail', (state, action) => {
      console.log('Reducer: getCategoryFail', action.payload);
      state.loading = false;
      state.error = action.payload;
    });
});