import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      console.log(credentials)
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkApi) => {
  try {
    await axios.post('users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});


export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async(_, thunkApi) => {
        const state = thunkApi.getState()
        console.log(state)
        const persistedToken = state.auth.token
        if(persistedToken === null) {
            return thunkApi.rejectWithValue('unable to catch user')
        }
        try{
            setAuthHeader(persistedToken)
            const res = await axios.get('users/current')
            return res.data
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.message);
          }
    }
)
