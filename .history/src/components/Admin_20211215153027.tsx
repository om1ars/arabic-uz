import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { useSelector } from "react-redux";
import { RootState } from "./dataLayer/store";

export default function Admin() {
    const admin = useSelector<RootState>(state => state.admin.)
  return (
    <div>
      <ChatIcon />
    </div>
  );
}
