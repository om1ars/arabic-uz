import { createSlice } from "@reduxjs/toolkit";
import { fetchSingle } from "./singleQuranSlice";

export type singleAudioState = {
  status: "idle" | "loading" | "rejected";
  error: String | null;
  singleAudio: any;
};

const initialState = {
  singleAudio: [],
  error: null,
} as singleAudioState;

const singleAudio = createSlice({
  name: "singleAudio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(fetchSingle.pending, state => {
          state.status = 'loading';
          state.error = null;
      });
      builder.addCase(sta)
  },
});

export default singleAudio.reducer;
