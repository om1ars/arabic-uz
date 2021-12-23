import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NumericLiteral } from 'typescript';
// import { act } from 'react-dom/test-utils';

interface CounterState {
    value: number
}

const initialState: CounterState = {
value : 0
}

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        addNumber: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
});

export const {

} = testSlice.actions
export default testSlice.reducer