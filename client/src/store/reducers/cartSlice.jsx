import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const base_URL = "https://parakh-api.vercel.app";

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (product, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/add-to-cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product }),
        credentials: "include",
      });

      const data = await response.json();
      if (response.ok) {
        return data.cart.items;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const increaseCartItem = createAsyncThunk(
  "cart/increaseCartItem",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/increase-cart-item`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
        credentials: "include",
      });

      const data = await response.json();
      if (response.ok) {
        return data.cart.items;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const decreaseCartItem = createAsyncThunk(
  "cart/decreaseCartItem",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/decrease-cart-item`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
        credentials: "include",
      });

      const data = await response.json();
      if (response.ok) {
        return data.cart.items;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/delete-cart-item`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
        credentials: "include",
      });

      const data = await response.json();
      if (response.ok) {
        return data.cart.items;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserCart = createAsyncThunk(
  "getUserCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/get-cart`, {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();
      if (response.ok) {
        return data.cart[0].cart.items;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const clearUserCart = createAsyncThunk(
  "clearUserCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/clear-cart`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await response.json();
      if (response.ok) {
        return data.cart.items;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    billDetails: {
      delivery: 50,
      cartTotal: 0,
      subTotal: 0,
      discount: 0,
      toPay: 0,
    },
  },
  extraReducers: (builder) => {
    builder
      //addToCart
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cart.push(action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.error = action.payload || "Failed to add item to cart";
      })

      //increaseCartItem
      .addCase(increaseCartItem.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(increaseCartItem.rejected, (state, action) => {
        state.error = action.payload || "Failed to increase item from cart";
      })

      //decreaseCartItem
      .addCase(decreaseCartItem.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(decreaseCartItem.rejected, (state, action) => {
        state.error = action.payload || "Failed to decrease item from cart";
      })

      //deleteCartItem
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.error = action.payload || "Failed to remove item from cart";
      })

      //clearCart
      .addCase(clearUserCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(clearUserCart.rejected, (state, action) => {
        state.error = action.payload || "Failed to remove item from cart";
      })

      //getCart
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        // Recalculate bill details
        state.billDetails.cartTotal = state.cart
          .map((item) => item.totalPrice + item.totalDiscount)
          .reduce((a, b) => a + b,0);
        state.billDetails.discount = state.cart
          .map((item) => item.totalDiscount)
          .reduce((a, b) => a + b,0);
        state.billDetails.subTotal =
          state.billDetails.cartTotal - state.billDetails.discount;
        state.billDetails.toPay =
          state.billDetails.subTotal + state.billDetails.delivery;
      });
  },
  
});


export default cartSlice.reducer;
