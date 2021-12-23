import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const number = 6

export const fetchSingleQuran = createAsyncThunk(
    'single/fetch',
    

    async(number) => {
        const res = await axios(`https://api.alquran.cloud/v1/surah/${number}`).then(res => res.data.ayahs)
        return res;
    }
)