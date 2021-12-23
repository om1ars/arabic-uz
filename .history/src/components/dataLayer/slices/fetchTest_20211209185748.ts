import { createAsyncThunk } from "@reduxjs/toolkit";
import { Todo } from "../types";


type FetchTodoserror= {
    message: string
}

export const fetchTest = createAsyncThunk<Todo[],

number,
{rejectValue: }

>(
  "todos/fetch",

  async (limit: number) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data: Todo[] = await res.json();

    return data;
  }
);
