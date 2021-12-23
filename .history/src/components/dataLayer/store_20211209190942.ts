import { configureStore,  } from "@reduxjs/toolkit";
import reducers from "./slices/rootReducer";
import {TypedUseSelectorHook, useSelector} from 'react-redux'




export const store = configureStore({
    reducer: reducers

})



// export const 

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


// export const useTypedSelector: TypedUseSelectorHook<RootState = useSelector>npm 