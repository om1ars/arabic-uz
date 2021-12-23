import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const fetchAudio = createAsyncThunk(
    "fetch/audio",
    
    async() => {
        const data = await axios('https://api.alquran.cloud/v1/surah')
    }
)