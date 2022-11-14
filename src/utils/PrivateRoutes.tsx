import React, { Component, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { RootState } from "../store/store";
const PrivateRoutes = ({ children, ...props }: { children: JSX.Element }) => {

  // * Getting state from redux store
  const user = useSelector((state:RootState)=>state.user);
  const location = useLocation();

  // * Checking if user is logged in
  if (user.user !== null) {
    <Component {...props}/>
  } else{
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoutes;


 