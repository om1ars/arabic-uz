import { createSlice } from "@reduxjs/toolkit";

interface authState {
  name: string;
  email: string | number | any;
  password: string | number | any;
}

const initialState = {
user: null
} as authState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUSer: (state, { payload }) => {
      state.name = payload;
      state.email = payload;
      state.password = payload;
    },
  },
});

export const { setUSer } = authSlice.actions;
export default authSlice.reducer;
