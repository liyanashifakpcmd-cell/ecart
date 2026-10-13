
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find(
        pro => pro.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.totalPrice =
          existingProduct.quantity * existingProduct.price;
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price
        });
      }
    },
    incrementQuantity:(state,action)=>{
              const existingProduct = state.find(
        pro => pro.id === action.payload)
        existingProduct.quantity++;
        existingProduct.totalPrice =existingProduct.quantity * existingProduct.price;

    },
     decrementQuantity:(state,action)=>{
         const existingProduct = state.find(pro => pro.id === action.payload)
        existingProduct.quantity--
        existingProduct.totalPrice =existingProduct.quantity * existingProduct.price;

    },
      removeFromCart: (state, action) => {
      return state.filter(pro => pro.id !== action.payload);
    },



    emptyCart: () => {
      return []
    }
  }
});

export const { addToCart, removeFromCart, emptyCart,incrementQuantity,decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
