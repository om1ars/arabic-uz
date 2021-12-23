import { createSlice } from "@reduxjs/toolkit";

interface authState { 
    user
}

const initialState = {
    user: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
