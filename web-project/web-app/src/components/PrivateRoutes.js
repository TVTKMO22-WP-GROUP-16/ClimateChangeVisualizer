import React from "react";
import { Outlet, Navigate } from "react-router-dom";

//Sisäänkirjautuneisuuden tarkistus
const PrivateRoutes = () => {
  let auth = localStorage.getItem('token');
  return (
    auth ? <Outlet/> : <Navigate to="/login" />
    );
};

export default PrivateRoutes;