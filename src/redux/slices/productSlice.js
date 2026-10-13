
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchproducts = createAsyncThunk(
  "products/fetchproducts",
  async () => {
    const res = await axios.get("https://dummyjson.com/products");

    localStorage.setItem(
      "allproducts",
      JSON.stringify(res.data.products)
    );

    return res.data.products;
  }
);

const productSlice = createSlice({
  name: "products",

  initialState: {
    loading: false,
    products: [],
    dummyProducts: [],
    cart: [],
    error: "",
  },

  reducers: {
    searchProducts: (state, action) => {
      const searchText = action.payload.toLowerCase().trim();

      state.products = state.dummyProducts.filter((pro) =>
        pro.title.toLowerCase().includes(searchText)
      );
    },

    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (pro) => pro.id !== action.payload
      );
    },

    emptyCart: (state) => {
      state.cart = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchproducts.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(fetchproducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.dummyProducts = action.payload;
      state.error = "";
    });

    builder.addCase(fetchproducts.rejected, (state) => {
      state.loading = false;
      state.products = [];
      state.dummyProducts = [];
      state.error = "API call failed";
    });
  },
});

export const {
  searchProducts,
  addToCart,
  removeFromCart,
  emptyCart,
} = productSlice.actions;

export default productSlice.reducer;
