import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state,action)=>{
            console.log(action)
            state.value += action.payload
        },
        decrement: (state,action)=>{
            state.value -= action.payload
        },
        reset: (state)=>{
            state.value = 0
        }
    }
})

export const {increment,decrement,reset} = counterSlice.actions

export default counterSlice.reducer 
