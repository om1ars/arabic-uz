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
 
    [fetchSingleQuran.]
  },
});


export default singleQuranSlice.reducer