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
      setToggleTrue: () => {}
  },
});

export const {} = sidebarSlice.actions;
export default sidebarSlice.reducer;
