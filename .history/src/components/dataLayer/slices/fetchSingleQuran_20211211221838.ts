import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const number = 6

export const fetchSingleQuran = createAsyncThunk(
    'single/fetch',
    

    async(number, num) => {
        const res = await axios(`https://api.alquran.cloud/v1/surah/6`).then(res => res.data.ayahs)
        return res;
    }
)