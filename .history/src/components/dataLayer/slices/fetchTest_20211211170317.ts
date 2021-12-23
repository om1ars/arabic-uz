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
    const res = await fetch("http://api.alquran.cloud/v1/format/text");
    const data: Todo[] = await res.json();


    return data;
  }
);
