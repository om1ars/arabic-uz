import { createSlice } from "@reduxjs/toolkit"



export type singleAudioState =  {
    status: 'idle' | 'loading' |'rejected';
    error: String | null,
    singleAudio: any
}

const initialState = {
    singleAudio: [],
    error: 
} as singleAudioState


const singleAudio = createSlice({
    
})