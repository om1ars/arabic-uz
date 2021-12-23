import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    error: null,
    surahs: [],
    loading: false
}



export const allSurahsSlice = createSlice({
    name: 'allSurahs',
    initialState,
    reduce
})