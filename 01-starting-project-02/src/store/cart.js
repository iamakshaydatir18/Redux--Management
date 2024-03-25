

import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialStateCart= {
    products:[],
    total:0,
    change : false
}

const cartReducerFunction = createSlice({
    name:'cart',
    initialState:initialStateCart,
    reducers :{
        CartReplace(state,action){
            
      
            state.products = action.payload.products;
            state.total = action.payload.total;


        },
        increment(state, action){

            const existingProductIndex = (state.products)?state.products.findIndex(item => item.title === action.payload.title):-1;
            
            if (existingProductIndex !== -1) {
             
                const updatedProducts = [...state.products];
                updatedProducts[existingProductIndex].quantity += action.payload.quantity;
                updatedProducts[existingProductIndex].total += updatedProducts[existingProductIndex].price;
                state.products = updatedProducts;

            } else {
                state.products  = (state.products)?[...state.products, action.payload]:[action.payload];
              
            }


            state.total += action.payload.price * action.payload.quantity;
            state.change = true;
          
            
        },
        incrementQuantity(state,action){
            
            const existingProductIndex = state.products.findIndex(item => item.title === action.payload.id);
           
            if (existingProductIndex !== -1) {
                const updatedProducts = [...state.products];
                updatedProducts[existingProductIndex].quantity += 1;
                updatedProducts[existingProductIndex].total += updatedProducts[existingProductIndex].price
                state.products = updatedProducts;
                state.total += updatedProducts[existingProductIndex].price
                state.change= true;
            }
           

        },
        decrementQuantity(state,action){

            const existingProductIndex = state.products.findIndex(item => item.title === action.payload.id);
           
            if (existingProductIndex !== -1) {

                if(state.products[existingProductIndex].quantity === 1){
                    state.total -= state.products[existingProductIndex].price;
                    state.products.splice(existingProductIndex,1);

                }else{
                    const updatedProducts = [...state.products];
                    updatedProducts[existingProductIndex].quantity -= 1;
                    updatedProducts[existingProductIndex].total -=  updatedProducts[existingProductIndex].price;
                    state.products = updatedProducts;
                    state.total -= updatedProducts[existingProductIndex].price
                }

                state.change = true;
            }

        }
    }
});


export const cartActions = cartReducerFunction.actions;

export const cartReducer =  cartReducerFunction.reducer;