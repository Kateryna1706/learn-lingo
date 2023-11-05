import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars/carsSlice';
import { filterReducer } from './cars/filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favoritesReducer } from './cars/favoritesSlice';

const filterPersistConfig = {
  key: 'filter',
  storage,
  whitelist: ['filterBrand', 'filterPrice'],
};

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: persistReducer(filterPersistConfig, filterReducer),
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
