import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSingleQuran = createAsyncThunk<any>(
    'single/fetch',

    async(number) => {
        const res = await fetch (``)
    }
)