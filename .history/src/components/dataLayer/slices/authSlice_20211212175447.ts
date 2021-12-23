import { createSlice } from "@reduxjs/toolkit";

interface authState { 
    user: string,
    email: string | number | any
    
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
