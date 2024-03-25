
//Using redux-toolkit
import {  configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter';
import { authReducer  } from './auth'

//to store state
const store = configureStore({
    reducer:{ counter : counterReducer , auth:authReducer}
});


export default store;


//Using redux code -->

/*
import { createStore } from 'redux';

const reducerFunction = (state= { counter : 0, hidden : true },action) => {

    if(action.type === 'increment'){

        return {
            counter : state.counter + 1,
            hidden : state.hidden
        }
    }

    if(action.type === 'decrement'){

        return {
            counter : state.counter - 1,
            hidden : state.hidden
        }
    }

    if(action.type === 'increase'){
        return {
            counter :state.counter + action.amount,
            hidden : state.hidden
        }
    }

    if(action.type === 'toggleCounter'){

        return{
            counter :state.counter ,
            hidden : !state.hidden
           
        }
    }

    return state;
}

const store = createStore(reducerFunction);


export default store;

*/