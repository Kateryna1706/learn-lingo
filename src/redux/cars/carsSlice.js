import { createSlice } from '@reduxjs/toolkit';

import { fetchCars, getFilteredCars } from './carsOperations';

const carsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchCars.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(getFilteredCars.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(getFilteredCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getFilteredCars.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
});

export const carsReducer = carsSlice.reducer;
