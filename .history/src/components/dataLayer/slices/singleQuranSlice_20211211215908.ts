import { createSlice } from "@reduxjs/toolkit";

s SingleState;

interface SingleState {
  status: "loading" | "idle";
  single: any;
  error: string | null;
}

const singleQuran = createSlice({
  name: "single",
  initialState,
  reducers: {},
});
