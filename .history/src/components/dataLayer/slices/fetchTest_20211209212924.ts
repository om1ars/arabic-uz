import { createAsyncThunk } from "@reduxjs/toolkit";
import { resourceLimits } from "worker_threads";
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
    const res = await fetch("https://random-data-api.com/api/stripe/random_stripe");
    const data: Todo[] = await resourceLimits..json();

    if(res.status !== 200) {
        return thunkApi.rejectWithValue({
            message: 'Failed to '
        })
    }

    return data;
  }
);
