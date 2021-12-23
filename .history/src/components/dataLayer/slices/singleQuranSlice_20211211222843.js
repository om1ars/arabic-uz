import { createSlice } from "@reduxjs/toolkit";
import { fetchSingleQuran } from "./fetchSingleQuran";

const initialState = {
  single: [],
} 

const singleQuranSlice = createSlice({
  name: "single",
  initialState,
  reducers: {},
  extraReducers:  {
 
    [fetchSingleQuran.pending]: () => {
      console.log("pending");
    },
    [fetchSingleQuran.rejected]: () => {
      console.log("rejected");
    },
    [fetchSingleQuran.fulfilled]: (state, { payload }) => {
      return { ...state, single: payload };
    },
  },
});


export default singleQuranSlice.reducer