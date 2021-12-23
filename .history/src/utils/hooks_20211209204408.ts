import { TypedUseSelectorHook } from "react-redux";
import { AppDispatch } from "../components/dataLayer/store";

export const useAppDispatch = () => useAppDispatch<AppDispatch>() 
export const useAppSelector: TypedUseSelectorHook