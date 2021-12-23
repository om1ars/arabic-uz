import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchSingleQuran } from "./fetchSingleQuran";

const initialState = {
  single: [],
} 
export const fetchSingle = createAsyncThunk(
  "single/fetchSingle",
  async (number) => {
    const data = await axios(
      `https://api.alquran.cloud/v1/surah/${number}`
    ).then((res) => res.data.data.ayahs);
    return data;
  }
);

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