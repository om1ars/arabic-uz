import { createAsyncThunk } from "@reduxjs/toolkit";
import { Todo } from "../types";

type FetchTodoserror = {
  message: string;
};

export const fetchTest = createAsyncThunk<
  Todo[],
//   number,
  { rejectValue: FetchTodoserror }
>(
  "todos/fetch",

  async (thunkApi) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data: Todo[] = await res.json();

    if(res.status !== 200) {
        return thunkApi.rejectWithValue({
            message: 'Failed to fetch'
        })
    }

    return data;
  }
);
