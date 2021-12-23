import React, { useState } from "react";
import { Routes, Route } from "react-router-dom;
import "./App.css";
import LoginhtmlForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' />
      </Routes>
    </>
  );
}

export default App;
