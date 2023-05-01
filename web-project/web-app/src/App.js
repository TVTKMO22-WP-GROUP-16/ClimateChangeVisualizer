import React, { useState } from "react";
import "./styles.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MySideNav from "./components/MySideNav";
import Charts1 from "./pages/Charts1";
import Charts2 from "./pages/Charts2";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogin = (token) => {
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <Router>
      <MySideNav handleLogout={handleLogout} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/charts1" element={<Charts1 />} />
        <Route path="/charts2" element={<Charts2 />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/dashboard"
          element={<Dashboard handleLogout={handleLogout} />}
        />
      </Routes>
    </Router>
  );
}
