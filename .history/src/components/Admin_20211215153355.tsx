import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./dataLayer/store";
import { setAdminFalse, setAdminTrue } from "./dataLayer/slices/adminSlice";

export default function Admin() {
  const admin = useSelector<RootState>((state) => state.admin.admin);
  const dispatch = useDispatch();
  const toggleAdminTrue = () => {
    dispatch(setAdminTrue());
  };
  const toggleAdminFalse = () => {
    dispatch(setAdminFalse());
  };

  return (
    <div>
      {!admin ? (
        <ChatIcon onClick={toggleAdminTrue} />
      ) : (
        <h1 onClick={toggleAdminFalse}>True</h1>
      )}
    </div>
  );
}
