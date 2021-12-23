import { createSlice } from "@reduxjs/toolkit";

interface SingleState {
  status: "loading" | "idle";
  single: any;
  error: string | null;
}
const initialState: any = {
  single: [],
} as SingleState;

const singleQuran = createSlice({
  name: "single",
  initialState,
  reducers: {

  }, extraReducers
});
