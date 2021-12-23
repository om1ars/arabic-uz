import { createSlice } from "@reduxjs/toolkit";
import { fetchSingleQuran } from "./fetchSingleQuran";

interface SingleState {
  status: "loading" | "idle";
  single: any;
  error: string | null;
}
const initialState: any = {
  single: [],
} as SingleState;

const singleQuran = createSlice({
  name: "single",
  initialState,
  reducers: {

  }, extraReducers: (builder) => {

    builder.addCase(fetchSingleQuran.pending, state => {
        state.status = 'laoding'
    });

    builder.addCase(fetchSingleQuran.rejected, state => {
        state.status = 'rejected',
        console.log('rejected');
        
    })
  }
});
