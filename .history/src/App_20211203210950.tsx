import React, { useState } from "react";
// import { Route, Routes } from "react-router";
import "./App.css";
import LoginhtmlForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </>
  );
}

export default App;
