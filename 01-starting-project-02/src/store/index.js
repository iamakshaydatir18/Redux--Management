import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./cart";
import { showCartReducer } from "./showCart";


const store = configureStore({ 
    reducer :{cart : cartReducer, showcart : showCartReducer}
});
export default store;