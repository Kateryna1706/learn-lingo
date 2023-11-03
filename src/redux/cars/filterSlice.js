import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { filterBrand: '', filterPrice: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
