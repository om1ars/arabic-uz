import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const fetchTodos = createAsyncThunk(
  "todos/fetch",

  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    const data = await response.json();

    return data;
  }
);
// {
// const dispatch  = useDispatch()
// }

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
