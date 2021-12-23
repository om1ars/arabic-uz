import { configureStore } from "@reduxjs/toolkit";
import reducers from "./slices/rootReducer";


const store = configureStore({
    reducer: reducers

})


export type RootState = ReturnType<typeof store.getState>

export tyoe