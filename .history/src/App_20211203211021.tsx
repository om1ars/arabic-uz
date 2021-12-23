import React, { useState } from "react";
// import { Route, Routes } from "react-router";
import "./App.css";
import LoginhtmlForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { Routes, Route } from "react-router-dom";
import ContactScreen from "./screens/ContactScreen";
import AboutUs from "./screens/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Serv />} />
      </Routes>
    </>
  );
}

export default App;
