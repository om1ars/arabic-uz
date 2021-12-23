import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { RootState } from "../store";
import { testStatus, Todo } from "../types";
// import { fetchTest } from "./fetchTest";
type FetchTodoserror = {
  message: string;
};

export const fetchTest = createAsyncThunk<
  Todo[],
  number,
  { rejectValue: FetchTodoserror }
>(
  "todos/fetch",

  async (limit: number, thunkApi) => {
    const res = await fetch("https://mp3quran.net/api/_english.php");
    const data: Todo[] = await res.json();

    if (res.status !== 200) {
      return thunkApi.rejectWithValue({
        message: "Failed to ",
      });
    }

    return data;
  }
);

type TodosState = {
  status: testStatus.failed | testStatus.idle | testStatus.pending;
  error: String | null;
  list: Todo[];
};

// export const selectStatus = (state: RootState) =>
//   state.test.status;
const initialState = {
  list: [],
  error: null,
  status: testStatus.pending,
} as TodosState;

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchTest.pending, (state) => {
      state.status = testStatus.;
      state.error = null;
    });

    builder.addCase(fetchTest.fulfilled, (state, { payload }) => {
      state.status = testStatus.idle;
      state.list = payload;
    });

    builder.addCase(fetchTest.rejected, (state, { payload }) => {
      state.status = testStatus.failed;
      // if (payload) state.error = payload.message;
    });
  },
});

export const {} = testSlice.actions;
export default testSlice.reducer;
