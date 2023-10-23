import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './authOperations';

const handlePending = (state, action) => {
  state.token = action.payload.token;
  state.user = action.payload.user;
  state.isLoggedin = true;
  state.isLoading = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
};

const authSlice = createSlice({
  name: auth,
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedin: false,
    isRefreshing: false,
  },
  extraReducers: {
    [register.fulfilled]: handlePending,
    [logIn.fulfilled]: handlePending,
    [logOut.fulfilled]: handlePending,
  },
});

export const authReduser = authSlice.reducer;