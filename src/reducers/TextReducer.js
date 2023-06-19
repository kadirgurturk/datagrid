import { createSlice } from "@reduxjs/toolkit";


const TextReducer = createSlice({
    name:"FilterText",
    initialState:{
        text: ""
    },
    reducers:{
        TextChange: (state,actions) =>{
            state.text = actions.payload
        },
        
    }
})

export const {TextChange} = TextReducer.actions;

export default TextReducer.reducer;