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
    const res = await fetch(
      "http://api.alquran.cloud/v1/edition?format=audio&language=fr&type=versebyverse"
    );
    const data: Todo[] = await res.json();

    if (res.status !== 200) {
      return thunkApi.rejectWithValue({
        message: "Failed to ",
      });
    }

    return data;
  }
);
