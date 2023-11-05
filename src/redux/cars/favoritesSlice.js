import { createSlice } from '@reduxjs/toolkit';

const favoritesInitialState = { favorites: [] };

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesInitialState,
  reducers: {
    addFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    deleteFavorites(state, action) {
      const index = state.favorites.findIndex(car => car.id === action.payload);
      state.favorites.splice(index, 1);
    },
  },
});

export const { addFavorites, deleteFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
