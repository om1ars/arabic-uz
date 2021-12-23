import { createSlice } from '@reduxjs/toolkit'
// import { act } from 'react-dom/test-utils';

interface CounterState {
    value: number
}

const initialState = {
value : 0
}

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        addNumber: (state, action) => {
            state.value += action.payload
        }
    }
});

export const {

} = testSlice.actions
export default testSlice.reducer