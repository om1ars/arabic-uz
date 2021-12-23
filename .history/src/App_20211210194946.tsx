import React, { useEffect, useState } from "react";
import "./App.css";
import LoginhtmlForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import {  Route, } from "react-router-dom";
import ContactScreen from "./screens/ContactScreen";
import AboutUs from "./screens/AboutUs";
import ServicesScreen from "./screens/ServicesScreen";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchTest } from "./components/dataLayer/slices/fetchTest";
import { RootState } from "./components/dataLayer/store";
import { SingleCard } from "./screens/SingleCard";
type Person = {

  id: number;
  surah_name_lang: string
}

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

const testQuran = useSelector<RootState>(state => state.test.list)
// const hey = [...testQuran]
// console.log(testQuran);

// Test

// console.log(Test);




useEffect(() => {
  dispatch(fetchTest(1))
}, [])

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" path={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesScreen />} />
        <Route path="/products:slug" element={<SingleCard />} />
      </Swit>
    </>
  );
}

export default App;
