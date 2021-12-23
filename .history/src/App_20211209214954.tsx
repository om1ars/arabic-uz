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
import { useDispatch, useSelector } from "react-redux";
import { fetchTest } from "./components/dataLayer/slices/fetchTest";
// import { RootStore } from "./components/dataLayer/store";

function App() {
  // const testApi = async () => {
  //  try {
  //   await axios(
  //     "http://api.alquran.cloud/v1/surah"
  //   ).then((res) => console.log(res));
  //  } catch (error) {
  //    alert(error)
  //  }
  // };

  // useEffect(() => {
  //   testApi();
  // }, []);


  // const test = useSelector((state: RootStore) => state.rootReducer.testReducer)

const dispatch = useDispatch()

const testQuran = useSelector(state => test)

console.log(testQuran);



useEffect(() => {
  dispatch(fetchTest(1))
}, [])

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
