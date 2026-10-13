import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from './slices/wishlistSlice'
import productReducer from'./slices/productSlice'
import cartReducer from './slices/cartSlice'
 const store=configureStore({
    reducer:{
        products: productReducer,
        wishlist:wishlistReducer,
        cart:cartReducer
    }
 })
 export default store