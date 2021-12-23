import { createSlice } from '@reduxjs/toolkit'
interface Admin {
    admin: Boolean
}

const initialState = {

} as Admin

const adminSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
    
    }
});

export const {

} = adminSlice.actions
export default adminSlice.reducer