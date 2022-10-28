import React, { Component, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { RootState } from "../store/store";
const PrivateRoutes = ({ children, ...props }: { children: JSX.Element }) => {
//   const [checkAuth, setCheckAuth] = useState<boolean>(true);
  const checkAuth = sessionStorage.getItem('Auth Token');
  const user = useSelector((state:RootState)=>state.user);
  const location = useLocation();
  if (user || checkAuth) {
    <Component {...props}/>
  } else{
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoutes;


