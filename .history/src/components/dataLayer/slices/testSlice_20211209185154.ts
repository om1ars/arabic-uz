import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Todo } from "../types";

type FetchTodosError = {
  message: string;
};

export const fetchTodos = createAsyncThunk<
  Todo[],
  number,
  { rejectValue: FetchTodosError }
>(
  "todos/fetch",

  async (limit: number, thunkApi) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    const data: Todo[] = await response.json();


    if(response.status !== 200) {
      return thunkApi.rejectWithValue
    }

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
