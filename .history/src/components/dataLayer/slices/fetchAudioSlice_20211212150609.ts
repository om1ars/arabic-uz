import { createSlice } from "@reduxjs/toolkit"



export type singleAudioState =  {
    status: 'idle' | 'loading' |'rejected';
    error: String | null,
    singleAudio: any
}

const initialState = {
    singleAudio: [],
    error: null
} as singleAudioState


const singleAudio = createSlice({
    name: 'singleAudio',
    initialState,
    reducers: {},
    extraReducers: builder


});



export default singleAudio.reducer