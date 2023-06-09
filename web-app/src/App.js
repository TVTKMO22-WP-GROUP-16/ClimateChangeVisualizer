import React, { useState } from "react";
import "./styles.css";
import "./Button.css";

import MySideNav from "./components/MySideNav";
import PrivateRoutes from "./components/PrivateRoutes";
import { BrowserRouter as Router, Route, Switch, Routes, useNavigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Charts1 from "./pages/Charts1";
import Charts2 from "./pages/Charts2";
import Dashboard from "./pages/Dashboard";
import CustomVisualization from "./pages/CustomVisualization";
import CreateView from "./pages/CreateView";

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
        <Route element={<PrivateRoutes />}>
            <Route  path="/dashboard" element={<Dashboard handleLogout={handleLogout}/>} />
            <Route path="/createview" element={<CreateView/>} /> 
        </Route>
        <Route path="/" element={<Home/>} />
        <Route path="/charts1" element={<Charts1/>} />
        <Route path="/charts2" element={<Charts2/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        <Route path="/customviews/:url" element={<CustomVisualization/>} />                 
      </Routes>
    </Router>
   
  );
}