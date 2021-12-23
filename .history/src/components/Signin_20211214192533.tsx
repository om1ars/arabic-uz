import React from "react";
import { Button } from "@material-ui/core";
import firebase from "firebase";
import {auth} from './'

export default function Signin() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(propvider)
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            padding: "30px",
            fontSize: "20px",
            borderRadius: "0",
            fontWeight: "600",
          }}
          onClick={signInWithGoogle}
        >
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}
