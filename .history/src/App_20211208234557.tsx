import React, { useEffect, useState } from "react";
// import { Route, Routes } from "react-router";
import "./App.css";
import LoginhtmlForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { Routes, Route } from "react-router-dom";
import ContactScreen from "./screens/ContactScreen";
import AboutUs from "./screens/AboutUs";
import ServicesScreen from "./screens/ServicesScreen";
import SingleCard from "./screens/SingleCard";
import axios from "axios";

function App() {
  const testApi = async () => {
    await axios(
      `${'https://api.mp3quran.net/api/ayat'}`
    ).then((res) => console.log(res));
  };

  useEffect(() => {
    testApi();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesScreen />} />
        <Route path="/products:title" element={<SingleCard />} />
      </Routes>
    </>
  );
}

export default App;
