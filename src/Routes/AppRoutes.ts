import React, { lazy } from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter,
    Route,
    Link
  } from "react-router-dom";

  
  const Login = lazy(
    () =>
      import(
        "../views/Login"
      )
  );
  const Signup = lazy(
    () =>
      import(
        "../views/Signup"
      )
  );
  const Home = lazy(
    () =>
      import(
        "../views/Home"
      )
  );
const NotFound = lazy(()=>import("../views/NotFound"));

// const ROUTES = [
//     {path:"/", element:<Login/>},
//     {
//         path:"/signup",
//         element:<Signup/>,
//     },
//     {
//         path:"/home", key:"HOME", exact:true, element:(Home)
//     },
//     {
//         path:"*" ,
//         element:(NotFound)

//     }
// ]

// export default ROUTES;
