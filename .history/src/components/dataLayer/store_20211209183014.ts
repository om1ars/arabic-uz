import { configureStore, TypedUseSelectorHook,  } from "@reduxjs/toolkit";
import reducers from "./slices/rootReducer";


export const store = configureStore({
    reducer: reducers

})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch