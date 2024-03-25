import { createSlice } from "@reduxjs/toolkit";


const showCartinitialState = { showcart : false , notification:null};

const showcartReducerFunction = createSlice({
    name :'ShowCart',
    initialState : showCartinitialState,
    reducers:{
        showcart(state){
            state.showcart = !state.showcart 
        },
        showNotification(state,action){
            state.notification = {
                status : action.payload.status,
                title : action.payload.title,
                message : action.payload.message
            }
        }
    }
});


export const showCartActions = showcartReducerFunction.actions;
export const showCartReducer = showcartReducerFunction.reducer; 