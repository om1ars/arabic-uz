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
  extraReducers: (builder) => {
    builder.addCase(fetchSingle.pending, (state) => {
      state.status = "loading";
      state.error = null;
      state.loading = true
    });

    builder.addCase(fetchSingle.fulfilled, (state, action) => {
      state.status = "idle";
      state.list.push(action.payload);
      state.loading = false
    });
  },
});

export const {remove} = singleQuran.actions;
export default singleQuran.reducer;
