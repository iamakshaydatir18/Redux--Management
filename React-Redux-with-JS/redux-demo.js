console.log(`welcome to redux-demo!!!!`);


const redux = require('redux');

const counterReducer =( state ={ counter : 0 },action) => {

    if(action.type =='increment'){
        return{
            counter:state.counter + 1
        }
    }
    
    if(action.type =='decrement'){
        return{
            counter:state.counter - 1
        }
    }

    return state;
}

const store = redux.createStore(counterReducer);


const counterSubsriber = () => {

    const latestCounter = store.getState();
    console.log(latestCounter);
}

store.subscribe(counterSubsriber);

store.dispatch({ type : 'increment'}); // preforms actions on store
store.dispatch({ type : 'decrement'});

//console.log(store.getState());