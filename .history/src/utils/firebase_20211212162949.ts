import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBxpuXHNb5J48wcsZYYsH6t3DG4oMWZwbg",
    authDomain: "quran-auth-44d6c.firebaseapp.com",
    projectId: "quran-auth-44d6c",
    storageBucket: "quran-auth-44d6c.appspot.com",
    messagingSenderId: "475865813017",
    appId: "1:475865813017:web:b82a6b2f1e044706915a88"
});

export default app;
export const auth = app.auth();
