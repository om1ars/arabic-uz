import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Todo } from "../types";
import { fetchTest } from "./fetchTest";

type TodosState = {
  status: "loading" | "idle";
  error: String | null;
  list: any;
};

const initialState = {
  list: [],
  error: null,
  status: "idle",
} as TodosState;

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setItem(state, action) {
      state.list = [...state.list];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTest.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(fetchTest.fulfilled, (state, action) => {
      state.status = "idle";
      state.list.push(action.payload);
    });

    builder.addCase(fetchTest.rejected, (state, action) => {

    }
  },
});

export const {setItem} = testSlice.actions;
export default testSlice.reducer;
