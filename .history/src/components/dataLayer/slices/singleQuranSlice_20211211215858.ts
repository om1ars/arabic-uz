import { createSlice } from "@reduxjs/toolkit"

const initialState:any= {
    single: []
} as SingleState

interface SingleState {
    status: 'loading'|'idle',
    single: any,
    error: string | null;
}

const singleQuran = createSlice({
    name: 'single',
    initialState, 
    reducers
})