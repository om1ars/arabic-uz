import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Todo } from "../types";
import { fetchTest } from "./fetchTest";

type TodosState = {
  status: "loading" | "idle";
  error: String | null;
  list: any;
  loading: boolean
};

const initialState = {
  list: [],
  loading: false,
  error: null,
  status: "idle",
} as TodosState;

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setItem(state, action) {
      state.list = [...action.payload];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTest.pending, (state) => {
      state.status = "loading";
      state.error = null;
      state.loading = true
    });

    builder.addCase(fetchTest.fulfilled, (state, action) => {
      state.status = "idle";
      state.list.push(action.payload);
    });
  },
});

export const { setItem } = testSlice.actions;
export default testSlice.reducer;
