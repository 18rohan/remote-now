import React, { lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import PrivateRoutes from "../utils/PrivateRoutes";


// import ROUTES from './AppRoutes'
const Login = lazy(() => import("../views/Login/CandidateLogin"));
const RecruiterLogin = lazy(() => import("../views/Login/RecruiterLogin"));
// const Signup = lazy(() => import("../views/Signup"));
const Home = lazy(() => import("../views/Home"));
const NotFound = lazy(() => import("../views/NotFound"));
const ProfileOverview = lazy(() => import("../views/ProfileOverview"));
const newLocal = "../views/ProfileBuilder";
const ProfileBuilder = lazy(() => import(newLocal));


const UserProfile = lazy(() => import("../views/UserProfile"));
const Resume = lazy(() => import("../views/Resume"));
const Landing = lazy(() => import("../views/LandingPage"));


const RoutesComponent = () => {
  const element = useRoutes([
    { path: "/", element: <Landing /> },
    {
      path: "/signin",
      element: <Outlet />,
      children: [
        {
          path: "candidate",
          element: <Login />,
        },
        {
          path: "recruiter",
          element: <RecruiterLogin />,
        },
      ],
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
      element: <ProfileBuilder />,
      children: [
        {
          path: "candidate",
          element: <ProfileBuilder />,
        },
        {
          path: "recruiter",
          element: <ProfileBuilder />,
        },
      ],
    },
    {
      path: "/user",
      element: (
        <PrivateRoutes>
          <Outlet />
        </PrivateRoutes>
      ),
      children: [
        {
          path: "",
          element: (
            <PrivateRoutes>
              <ProfileOverview />
            </PrivateRoutes>
          ),
        },
        {
          path: "profile",
          element: (
            <PrivateRoutes>
              <UserProfile />
            </PrivateRoutes>
          ),
        },
        {
          path: "overview",
          element: (
            <PrivateRoutes>
              <ProfileOverview />
            </PrivateRoutes>
          ),
        },
        {
          path: "resume",
          element: (
            <PrivateRoutes>
              <Resume />
            </PrivateRoutes>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return element;
};

export default RoutesComponent;
