import { createSlice } from '@reduxjs/toolkit'

const initialState = {
value : 0
}

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        addNumber: (state, action) => {

        }
    }
});

export const {

} = testSlice.actions
export default testSlice.reducer