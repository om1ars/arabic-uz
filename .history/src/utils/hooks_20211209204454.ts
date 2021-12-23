import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../components/dataLayer/store";

export const useAppDispatch = () => useDispatch<AppDispatch>() 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector