import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
// import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  const [openSidebar, setOPenSidebar] = useState(false);

  const handleSidebar = () => {
    setOPenSidebar(!openSidebar);
    console.log('Clicked')
  };
  return (
    <div className="App">
      <Navbar handleSidebar={handleSidebar} />
      <Sidebar openSidebar={openSidebar} />
    </div>  
  );
}

export default App;
