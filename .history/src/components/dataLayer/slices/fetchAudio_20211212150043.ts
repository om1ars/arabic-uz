import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const fetchAudio = createAsyncThunk(
    "fetch/audio",
    
    async() => {
        const data = await axios('http://api.alquran.cloud/v1/quran/ar.alafasy').then(res => res.data)


        return data;
    }
)