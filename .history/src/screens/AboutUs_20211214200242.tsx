import React from "react";
import Chat from "../components/Chat";
import Signin from "../components/SignIn";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function AboutUs() {
//   const [user] = useAuthState(auth);
const user = null;
  return <div>{user ? <Signin /> : <Chat />}</div>;
}
