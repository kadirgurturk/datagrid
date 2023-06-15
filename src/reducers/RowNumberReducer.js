import { createSlice } from "@reduxjs/toolkit";


const RowNumberReducer = createSlice({
    name:"RowNumber",
    initialState:{
        RowNumber: 6
    },
    reducers:{
        RowChange: (state,actions) =>{
            state.loginOff = actions.payload;
        },
        
    }
})

export const {LoginOff} = RowNumberReducer.actions;

export default RowNumberReducer.reducer;