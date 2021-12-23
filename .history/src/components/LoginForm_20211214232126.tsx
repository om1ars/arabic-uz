import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../utils/firebase";

export default function LoginhtmlForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>("");

  const signup = (email: any, password: any) => {
    auth.createUserWithEmailAndPassword(email, password);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // setLoading(true);

    try {
      setError("");
      await signup(email, password);
      alert("Succesfully created");
      // setLoading(false);
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const uns = auth.onAuthStateChanged((u: any) => setCurrentUser(u));

    return uns;
  }, []);

  console.log(currentUser);

  return (
    <>
      <div>
     
          <>
         
          </>
  );
}
