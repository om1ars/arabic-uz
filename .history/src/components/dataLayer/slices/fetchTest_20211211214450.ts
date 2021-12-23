import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchTest = createAsyncThunk<any>(
  "todos/fetch",

  async () => {
    const res = await fetch("https://api.alquran.cloud/v1/surah");
    const data: any = await res.json();

    return data;
  }
);
