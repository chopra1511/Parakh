import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import productSlice from "./reducers/productSlice";
import cartSlice from "./reducers/cartSlice";
import addressSlice from "./reducers/addressSlice";
import checkoutSlice from "./reducers/checkoutSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    products: productSlice,
    cart: cartSlice,
    address: addressSlice,
    order: checkoutSlice
  },
});

export default store;
