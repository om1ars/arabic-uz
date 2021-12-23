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

  async () => {
    const res = await fetch("https://mp3quran.net/api/_english.php");
    const data: Todo[] = await res.json();

    // if(res.status !== 200) {
    //     return thunkApi.rejectWithValue({
    //         message: 'Failed to '
    //     })
    // }

    return data;
  }
);
