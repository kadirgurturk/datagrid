import { createSlice } from "@reduxjs/toolkit";


const PageNumberReducer = createSlice({
    name:"PageNumber",
    initialState:{
        PageNumber: 0
    },
    reducers:{
        PageChange: (state,actions) =>{
            state.PageNumber = actions.payload
        },
        
    }
})

export const {PageChange} = PageNumberReducer.actions;

export default PageNumberReducer.reducer;