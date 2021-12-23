import React, { useEffect, useState } from "react";
import "./App.css";
import LoginhtmlForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { Route, Switch } from "react-router-dom";
import ContactScreen from "./screens/ContactScreen";
import AboutUs from "./screens/AboutUs";
import ServicesScreen from "./screens/ServicesScreen";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchTest } from "./components/dataLayer/slices/fetchTest";
import { RootState } from "./components/dataLayer/store";
import { SingleCard } from "./screens/SingleCardScreen";
import Test from "./test";
type Person = {
  id: number;
  surah_name_lang: string;
};

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

  const dispatch = useDispatch();

  const testQuran = useSelector<RootState>((state) => state.test.list);

  useEffect(() => {
    dispatch(fetchTest(1));
  }, []);

  const arrayed_chapters = [testQuran];
  const get_chapter_name = null;

  // console.log(arrayed_chapters);

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/contact" component={ContactScreen} />
        <Route path="/about" component={AboutUs} />
        <Route path="/services" component={ServicesScreen} />
        <Route path="/products/:title" component={SingleCard} />
        <Test />
      </Switch>
    </>
  );
}

export default App;
