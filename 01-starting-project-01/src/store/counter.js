
import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter:0, showToggle:true};


const counterSlice = createSlice({

    name : 'counter',
    initialState :initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.payload
        },
        toogleCounter(state){
            state.showToggle =  !state.showToggle
        }
    }
});

//for actions
export const counterActions = counterSlice.actions;

export const counterReducer = counterSlice.reducer;