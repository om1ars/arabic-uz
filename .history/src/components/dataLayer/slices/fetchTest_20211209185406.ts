import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTest = createAsyncThunk(
    'todos/fetch',


    async () => {
        const res = await fetch('')
    }
)