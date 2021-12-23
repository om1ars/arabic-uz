import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Todo } from "../types";
import { fetchTest } from "./fetchTest";

type TodosState = {
  status: "loading" | "idle";
  error: String | null;
  list: Todo[];
};

interface CounterState {
  value: number;
}

const initialState = {
  list: [],
  error: null,
  status: "idle",
} as TodosState;

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchTest.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(fetchTest.fulfilled, (state, { payload }) => {
      state.status = "idle";
      // state.list;
    });


    // builder.addCase(fetchTest.rejected,)
  },
});

export const {} = testSlice.actions;
export default testSlice.reducer;
