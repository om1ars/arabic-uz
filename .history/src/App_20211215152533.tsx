import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { Route, Switch } from "react-router-dom";
import ContactScreen from "./screens/ContactScreen";
import AboutUs from "./screens/AboutUs";
import ServicesScreen from "./screens/ServicesScreen";
import { useDispatch, useSelector } from "react-redux";
import { fetchTest } from "./components/dataLayer/slices/fetchTest";
import { RootState } from "./components/dataLayer/store";
import { SingleCard } from "./screens/SingleCardScreen";
import Payment from "./components/Payment";
import Admin from "./components/Admin";

function App() {
  const data: any = useSelector<RootState>((state) => state.test.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTest());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/contact" component={ContactScreen} />
        <Route path="/about" component={AboutUs} />
        <Route path="/services" component={ServicesScreen} />
        <Route path="/singleChapter/:number">
          <SingleCard data={data} />
        </Route>
        <Route path='/plan' component={Payment} />
      </Switch>
      <div style={{position: 'fixed'}}>
      <Admin  />
      </div>
    </>
  );
}

export default App;
