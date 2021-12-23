import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const fetchTodos = async() => {
  'todos/fetch',



  async () => {
    
  }
}

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { addNumber } = testSlice.actions;
export default testSlice.reducer;
