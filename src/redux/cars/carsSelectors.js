import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.items;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.cars.isLoading;

export const selectError = state => state.cars.error;

export const selectVisibleCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    return cars.filter(
      ({ make, rentalPrice }) =>
        make.toLowerCase().includes(filter.filterBrand.toLowerCase()) &&
        Number(rentalPrice.slice(1)) <= Number(filter.filterPrice)
    );
  }
);
