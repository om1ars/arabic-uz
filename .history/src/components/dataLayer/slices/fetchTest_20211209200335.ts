import { createAsyncThunk } from "@reduxjs/toolkit";
import { Todo } from "../types";

type FetchTodoserror = {
  message: string;
};

export const fetchTest = createAsyncThunk<
  Todo[],
  number,
  { rejectValue: FetchTodoserror }
>(
  "todos/fetch",

  async (limit: number, thunkApi) => {

    try

    if(res.status !== 200) {
        return thunkApi.rejectWithValue({
            message: 'Failed to '
        })
    }

    return data;
  }
);
