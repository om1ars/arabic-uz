import { createAsyncThunk } from "@reduxjs/toolkit";
import { Todo } from "../types";

type FetchTodoserror = {
  message: string;
};

export const fetchTest = createAsyncThunk<Todo[]>(
  "todos/fetch",

  async () => {
    const res = await fetch("http://api.alquran.cloud/v1/quran/ar.alafasy");
    const data: Todo[] = await res.json();

    return data.data;
  }
);
