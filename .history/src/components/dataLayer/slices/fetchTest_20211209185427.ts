import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTest = createAsyncThunk(
    'todos/fetch',


    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = res.json()

    }
)