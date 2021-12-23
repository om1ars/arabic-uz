import { createSlice } from "@reduxjs/toolkit"

const initialState:any= {
    single: []
}

interface SingleState {
    status: 'loading'|'idle',
    single: any,
    error: string | null;
}

const singleQuran = createSlice({
    name: 'single'
})