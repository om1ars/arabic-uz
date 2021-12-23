import { createAsyncThunk } from "@reduxjs/toolkit";
import { Todo } from "../types";

type FetchTodoserror = {
  message: string;
};

export const fetchTest = createAsyncThunk<
  Todo[]
>(
  "todos/fetch",

  async () => {
    const res = await fetch("https://api.alquran.cloud/v1/format/text");
    const data: Todo[] = await res.json();


    return data;
  }
);
