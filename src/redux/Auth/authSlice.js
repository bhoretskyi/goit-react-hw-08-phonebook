import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleLogout = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedin = false;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedin: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [register.pending]: handlePending,
    [register.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedin = true;
      state.isLoading = false;
    },
    [register.rejected]: handleRejected,

    [logIn.pending]: handlePending,

    [logIn.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedin = true;
      state.isLoading = false;
    },
    [logIn.rejected]: handleRejected,
    [logOut.fulfilled]: handleLogout,
    [refreshUser.pending]: state => {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedin = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected]: (state, _) => {
      state.isRefreshing = false;
    },
  },
});

export const authReduser = authSlice.reducer;
