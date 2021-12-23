import { createAsyncThunk } from "@reduxjs/toolkit";
import { Todo } from "../types";

export const fetchTest = createAsyncThunk<Todo[]>




>(
  "todos/fetch",

  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data: Todo[] = res.json();

    return data;
  }
);
