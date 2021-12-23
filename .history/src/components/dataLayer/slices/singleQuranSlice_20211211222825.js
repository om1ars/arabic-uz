import { createSlice } from "@reduxjs/toolkit";
import { fetchSingleQuran } from "./fetchSingleQuran";

const initialState = {
  single: [],
} 

const singleQuranSlice = createSlice({
  name: "single",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
 
    [fetchSingle.pending]: () => {
      console.log("pending");
    },
    [fetchSingle.rejected]: () => {
      console.log("rejected");
    },
    [fetchSingle.fulfilled]: (state, { payload }) => {
      return { ...state, single: payload };
    },
  },
});


export default singleQuranSlice.reducer