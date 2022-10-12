import React, { Component, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";

const PrivateRoutes = ({ children, ...props }: { children: JSX.Element }) => {
//   const [checkAuth, setCheckAuth] = useState<boolean>(true);
  const checkAuth = sessionStorage.getItem('Auth Token');
  const location = useLocation();
  if (!checkAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else if(checkAuth) {
    <Component {...props}/>
  }

  return children;
};

export default PrivateRoutes;
