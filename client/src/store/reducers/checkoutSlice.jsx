import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const base_URL = "http://localhost:8080";

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`const base_URL = "http://localhost:8080";/cart-checkout`, {
        method: "GET",
      });
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const paymentVerify = createAsyncThunk(
  "order/paymentVerify",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/payment-verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId }),
        credentials: "include",
      });
      const result = await response.json();
      return result[0];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const checkoutSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
    orderStatus: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.fulfilled, (state, action) => {
        state.order = action.payload;
      })
      .addCase(paymentVerify.fulfilled, (state, action) => {
        state.orderStatus = action.payload;
      });
  },
});

export default checkoutSlice.reducer;
