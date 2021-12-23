import React from "react";
import { Button } from '@material-ui/core'


export default function Signin() {
    function signInWithGoogle() {
        
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
