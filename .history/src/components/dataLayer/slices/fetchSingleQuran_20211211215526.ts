import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleQuran = createAsyncThunk<any>(
    'single/fetch',

    async(number) => {
        const res = await axios(`https://api.alquran.cloud/v1/surah/${number}`).then(res => res.data.)
    }
)