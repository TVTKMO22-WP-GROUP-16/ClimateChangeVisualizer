import React from "react";
import "./styles.css";

import MySideNav from "./components/MySideNav";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Charts1 from "./pages/Charts1";
import Charts2 from "./pages/Charts2";
import Login from './Login';
import Register from './Register';
import PrivateRoute from './PrivateRoute';

export default function App() {
  return (
    <Router>
      <MySideNav />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/charts1" element={<Charts1/>} />
        <Route path="/charts2" element={<Charts2/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
    </Router>
  );
}
