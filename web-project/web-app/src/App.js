import React, { useState } from "react";
import "./styles.css";

import MySideNav from "./components/MySideNav";
import { BrowserRouter as Router, Route, Switch, Routes, useNavigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Charts1 from "./pages/Charts1";
import Charts2 from "./pages/Charts2";
<<<<<<< HEAD
import Charts3 from "./pages/Charts3";
=======
import Charts4 from "./pages/Charts4";
>>>>>>> bbd984dcc533590be9d3634b53d15715e40434ab
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogin = (token) => {
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <Router>
      <MySideNav handleLogout={handleLogout} />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/charts1" element={<Charts1/>} />
        <Route path="/charts2" element={<Charts2/>} />
<<<<<<< HEAD
        <Route path="/charts3" element={<Charts3/>} />
=======
        <Route path="/charts4" element={<Charts4/>} />
>>>>>>> bbd984dcc533590be9d3634b53d15715e40434ab
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        <Route path="/dashboard" element={<Dashboard handleLogout={handleLogout} />} />
         
      </Routes>
    </Router>
   
  );
}
