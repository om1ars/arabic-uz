import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  const [openSidebar, setOPenSidebar] = useState(false);

  const handleSidebar = () => {
    setOPenSidebar(!openSidebar);
  };
  return (
    <div className="App">
      <Navbar handle />
      <Sidebar />
    </div>
  );
}

export default App;
