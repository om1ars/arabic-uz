import { createSlice } from "@reduxjs/toolkit"

const initialState:any= {
    single: []
}

interface SingleState {
    status: 'loading'|'idle',
    
}

const singleQuran = createSlice({
    name: 'single'
})