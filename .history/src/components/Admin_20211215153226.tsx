import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./dataLayer/store";
import { setAdminTrue } from "./dataLayer/slices/adminSlice";

export default function Admin() {
  const admin = useSelector<RootState>((state) => state.admin.admin);
  const dispatch = useDispatch()
  const toggleAdminTrue = () => {
      dispatch(setAdminTrue())
  }

  return <div>{!admin ? <ChatIcon /> : "True"}</div>;
}
