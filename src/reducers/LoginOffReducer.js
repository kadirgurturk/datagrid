import { createSlice } from "@reduxjs/toolkit";

//Login popup kapatmak için reducer tanımlıyoruz.

const LoginOffReducer = createSlice({
    name:"LoginOff",
    initialState:{
        loginOff: false
    },
    reducers:{
        LoginOff: (state) =>{
            state.loginOff = (!state.loginOff)
        },
        
    }
})

export const {LoginOff} = LoginOffReducer.actions;

export default LoginOffReducer.reducer;