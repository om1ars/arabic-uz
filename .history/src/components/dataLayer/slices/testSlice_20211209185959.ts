import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Todo } from "../types";

type TodoState = {
  status: 'loading' 
}

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

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
