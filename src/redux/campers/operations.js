import axios from "axios";
import {
  createAsyncThunk
} from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCampers = createAsyncThunk(
  'campers/fetchAll',
  async (filters = {}, thunkAPI) => {
    try {
      const response = await axios.get('/campers', {
        params: filters,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getCampersById = createAsyncThunk(
  'campers/fetchById',
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${camperId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
