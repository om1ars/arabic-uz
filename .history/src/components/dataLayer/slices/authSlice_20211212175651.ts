import { createSlice } from "@reduxjs/toolkit";

interface authState {
  name: string;
  email: string | number | any;
  password: string | number | any;
}

const initialState = {
  name: "",
  email: "",
  password: "",
} as authState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
      setUSer : (state, {payload}) => {
          state.name = pa
      }
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
