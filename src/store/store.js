import { configureStore } from "@reduxjs/toolkit";
import LoginOffReducer from "../reducers/LoginOffReducer";
import RowNumberReducer from "../reducers/RowNumberReducer";
import PageNumberReducer from "../reducers/PageNumberReducer";



const store = configureStore({
    reducer:{
        loginOff : LoginOffReducer,
        RowNumber : RowNumberReducer,
        PageNumber: PageNumberReducer,
    }
})

export default store;