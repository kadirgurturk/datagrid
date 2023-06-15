import { configureStore } from "@reduxjs/toolkit";
import LoginOffReducer from "../reducers/LoginOffReducer";

const store = configureStore({
    reducer:{
        loginOff : LoginOffReducer,
    }
})

export default store;