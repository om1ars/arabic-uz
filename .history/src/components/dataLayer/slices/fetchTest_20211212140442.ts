import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchTest = createAsyncThunk<any>(
  "todos/fetch",

  async () => {
    const res = await axios("https://api.alquran.cloud/v1/surah");

    return data;
  }
);
