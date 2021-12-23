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

    try {
        const res = await fetch("http://apsi.alquran.cloud/v1/manzil/7/quran-uthmani");
        const data: Todo[] = await res.json();
    } catch (error) {
        console.log(error.);
        
    }

    if(res.status !== 200) {
        return thunkApi.rejectWithValue({
            message: 'Failed to '
        })
    }

    return data;
  }
);
