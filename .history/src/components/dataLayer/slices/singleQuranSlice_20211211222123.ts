import { createSlice } from "@reduxjs/toolkit";
import { fetchSingleQuran } from "./fetchSingleQuran";

interface SingleState {
  status: "loading" | "idle" | "rejected";
  single: any;
  error: string | null;
}
const initialState: any = {
  single: [],
} 

const singleQuranSlice = createSlice({
  name: "single",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleQuran.pending, (state) => {
      state.status = "laoding";
    });

    builder.addCase(fetchSingleQuran.rejected, (state) => {
      state.status = "rejected";
      console.log("rejected");
    });
    builder.addCase(fetchSingleQuran.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});


export default singleQuranSlice.reducer