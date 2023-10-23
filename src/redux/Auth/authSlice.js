import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedin: false,
    isRefreshing: false
}

