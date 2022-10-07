import React, {lazy} from 'react'
import { useRoutes } from 'react-router-dom'
// import ROUTES from './AppRoutes'
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


const RoutesComponent = () => {
  const element = useRoutes([
    {path:"/", element:<Login/>},
    {
        path:"/signup",
        element:<Signup/>,
    },
    {
        path:"/home", element:<Home/>
    },
    {
        path:"*" ,
        element:<NotFound/>

    }
]);
  return element;
}

export default RoutesComponent;