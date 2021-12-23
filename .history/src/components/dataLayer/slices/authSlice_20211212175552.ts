import { createSlice } from "@reduxjs/toolkit";

interface authState { 
    name: string,
    email: string | number | any
    password: string | number | any
}

const initialState = {
    name: '',
    email:''
} as authState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
