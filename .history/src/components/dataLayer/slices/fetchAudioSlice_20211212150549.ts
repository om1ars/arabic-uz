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
    reducers: {}
});



export default singleAudio.reducer