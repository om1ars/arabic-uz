import React, { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import LoginhtmlForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Routes>
        <Navbar />
        <Route path='/' element={<HomeScreen />} />
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </>
  );
}

export default App;
