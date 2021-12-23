import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Todo } from "../types";

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
  reducers: {

  },


  extraReducers
});

export const {  } = testSlice.actions;
export default testSlice.reducer;
