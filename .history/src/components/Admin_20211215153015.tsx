import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { useSelector } from "react-redux";

export default function Admin() {
    const admin = useSelector<RootState
  return (
    <div>
      <ChatIcon />
    </div>
  );
}
