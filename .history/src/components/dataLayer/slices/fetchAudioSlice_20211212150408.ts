


types singleAudioState =   {
    status: 'idle' | 'loading' |'rejected';
    error: String | null,
    singleAudio: any
}

const initialState = {
    singleAudio: [],
    error: 
} as singleA