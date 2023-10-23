import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./authOperations";


const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedin: false,
    isRefreshing: false
}

