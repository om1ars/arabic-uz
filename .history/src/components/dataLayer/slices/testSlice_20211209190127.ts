import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Todo } from "../types";

type TodoState = {
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
  status: 'idle',

  
} as TodoState;

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { addNumber } = testSlice.actions;
export default testSlice.reducer;
