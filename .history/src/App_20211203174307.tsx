import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
// import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  const [openSidebar, setOPenSidebar] = useState(false);

  const handleSidebar = () => {
    setOPenSidebar(openSidebar === true);
    console.log('Clicked')
  };
  return (
    <div className="App">
  
    </div>  
  );
}

export default App;
