import { createSlice } from "@reduxjs/toolkit";

interface Toggle {
  toggle: Boolean;
}

const initialState = {
  toggle: false,
} as Toggle;

const sidebarSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
      setToggleTrue: (state) => {
          state.toggle = true
      },
      setToggleFalse: (state) => {
          state.toggle = false;
      }
  },
});

export const {} = sidebarSlice.actions;
export default sidebarSlice.reducer;
