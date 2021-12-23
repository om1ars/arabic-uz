import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingle = createAsyncThunk(
  "single/fetchSingle",
  async (number) => {
    const data = await axios(
      `https://api.alquran.cloud/v1/surah/${number}`
    ).then((res) => res.data.data.ayahs);
    return data;
  }
);

const initialState = {
  single: [],
  loading: false
};

const singleQuran = createSlice({
  name: "single",
  initialState,
  reducers: {
      remove(state, action)  {}
  },
  extraReducers: {
    [fetchSingle.pending]: (state) => {
      console.log("pending");
      state.loading = true
    },
    [fetchSingle.rejected]: (state) => {
      console.log("rejected");
      state.
    },
    [fetchSingle.fulfilled]: (state, { payload }) => {
      return { ...state, single: payload };
    },
  },
});

export const {remove} = singleQuran.actions;
export default singleQuran.reducer;
