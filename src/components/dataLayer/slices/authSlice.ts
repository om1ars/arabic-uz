import { createSlice } from "@reduxjs/toolkit";

interface authState {
  user: any;
}

const initialState = {
  user: null,
} as authState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUSer: (state, { payload }) => {
      state.user = payload
    },
  },
});

export const { setUSer } = authSlice.actions;
export default authSlice.reducer;
