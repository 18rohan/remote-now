import React, { lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import PrivateRoutes from "../utils/PrivateRoutes";

// import ROUTES from './AppRoutes'
const Login = lazy(() => import("../views/Login"));
const Signup = lazy(() => import("../views/Signup"));
const Home = lazy(() => import("../views/Home"));
const NotFound = lazy(() => import("../views/NotFound"));
const ProfileOverview = lazy(()=>import("../views/ProfileOverview"));
const ProfileBuilder = lazy(()=>import("../views/ProfileBuilder"));
const UserProfile = lazy(()=>import("../views/UserProfile"));
const Resume = lazy(()=>import('../views/Resume'));

const RoutesComponent = () => {
  const element = useRoutes([
    { path: "/", element: <Login /> },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/home",
      element: (
        <PrivateRoutes>
          <Home />
        </PrivateRoutes>
      ),
    },
    {
      path: "/build-profile",
      element: (
          <PrivateRoutes>
          <ProfileBuilder/>
          </PrivateRoutes>
        
      ),
    },
    {
      path: "/user",
      element: (
        <PrivateRoutes>
          <Outlet />
        </PrivateRoutes>
      ),
      children:[
        {
          path:'',
          element:(
            <PrivateRoutes>
              <ProfileOverview/>
            </PrivateRoutes>
          )
        },
        {
          path:'profile',
          element:(
            <PrivateRoutes>
              <UserProfile/>
            </PrivateRoutes>
          )
        },
        {
          path:'overview',
          element:(
            <PrivateRoutes>
              <ProfileOverview/>
            </PrivateRoutes>
          )
        },
        {
          path:'resume',
          element:(
            <PrivateRoutes>
              <Resume/>
            </PrivateRoutes>
          )
        }

      ]
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return element;
};

export default RoutesComponent;
