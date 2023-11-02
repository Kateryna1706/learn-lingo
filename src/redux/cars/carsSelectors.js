import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.items;

export const selectFilter = state => state.filter.filter;

export const selectIsLoading = state => state.cars.isLoading;

export const selectError = state => state.cars.error;

export const selectVisibleCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    return cars.filter(({ make }) =>
      make.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
