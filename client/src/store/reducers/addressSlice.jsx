import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const base_URL = "http://localhost:8080";

export const addUserAddress = createAsyncThunk(
  "addUserAddress",
  async (address, { rejectWithValue }) => {
      try {
        console.log(address);
      const response = await fetch(`${base_URL}/add-address`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({address}),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        return data.addresses[0]
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeUserAddress = createAsyncThunk(
    "removeUserAddress",
    async (addressId, { rejectWithValue }) => {
        try {
            console.log(addressId);
            const response = await fetch(`${base_URL}/remove-address`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ addressId }),
              credentials: "include",
            });
            const data = await response.json();
            console.log(data.address.addresses.addressList);
            if (response.ok) {
                return data.address.addresses.addressList;
            } else {
                return rejectWithValue(data.message);
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getUserAddresses = createAsyncThunk(
  "getAddress",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/get-address`, {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        return data.addresses[0].addresses.addressList;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);





const addressSlice = createSlice({
  name: "address",
  initialState: {
    addresses: [], 
    isLoading: false,
    isError: false,
    errorMessage: null,
  },
  extraReducers: (builder) => {
    // Reducers for addUserAddress
    builder
      .addCase(addUserAddress.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(addUserAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addresses.push(action.payload);
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(addUserAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Failed to add user address";
      });

    // Reducers for removeUserAddress
    builder
      .addCase(removeUserAddress.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(removeUserAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addresses = action.payload;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(removeUserAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Failed to remove user address";
      });

    // Reducers for getAddress
    builder
      .addCase(getUserAddresses.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(getUserAddresses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addresses = action.payload;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(getUserAddresses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Failed to fetch addresses";
      });
  },
});


export default addressSlice.reducer;