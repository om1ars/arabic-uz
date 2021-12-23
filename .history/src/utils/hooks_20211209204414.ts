import { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../components/dataLayer/store";

export const useAppDispatch = () => useAppDispatch<AppDispatch>() 
export const useAppSelector: TypedUseSelectorHook<RootState>