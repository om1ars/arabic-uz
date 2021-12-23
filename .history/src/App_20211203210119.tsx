import React, { useState } from "react";
import { Routes } from "react-router";
// import { Routes, Route } from "react-router-dom;
import "./App.css";
import LoginhtmlForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
    <Routes>
      <Navbar />
      </Routes>
 
    </>
  );
}

export default App;
