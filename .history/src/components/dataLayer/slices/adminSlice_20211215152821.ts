import { createSlice } from "@reduxjs/toolkit";
interface Admin {
  admin: Boolean;
}

const initialState = {
  admin: false,
} as Admin;

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdminTrue: (state) => {
      state.admin = true;
    }, 
    setAdminFalse (state) {
        
    }
  },
});

export const {} = adminSlice.actions;
export default adminSlice.reducer;
