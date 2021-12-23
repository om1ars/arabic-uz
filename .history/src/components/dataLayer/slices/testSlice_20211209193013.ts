import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { RootState } from "../store";
import { Todo } from "../types";
import { fetchTest } from "./fetchTest";

type TodosState = {
  status: "loading" | "idle";
  error: String | null;
  list: Todo[];
};

export const selectStatus = (state: RootState) =>
  state.test.status;
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
      // state.list.push(...payload);
    });

    builder.addCase(fetchTest.rejected, (state, { payload }) => {
      state.status = "idle";
      // if (payload) state.error = payload.message;
    });
  },
});

export const {} = testSlice.actions;
export default testSlice.reducer;
