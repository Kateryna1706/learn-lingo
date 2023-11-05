import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64c8e09ba1fe0128fbd65c53.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=${page}&limit=12`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFilteredCars = createAsyncThunk(
  'cars/getFilteredCars',
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `/adverts?page=${data.page}&limit=12&make=${data.make}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



