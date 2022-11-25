import  { lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import PrivateRoutes from "../utils/PrivateRoutes";



// import ROUTES from './AppRoutes'
const Login = lazy(() => import("../views/Login/CandidateLogin"));
const RecruiterLogin = lazy(() => import("../views/Login/RecruiterLogin"));
// const Signup = lazy(() => import("../views/Signup"));
const Home = lazy(() => import("../views/Home"));
const NotFound = lazy(() => import("../views/NotFound"));
const ProfileOverview = lazy(() => import("../views/Candidate/ProfileOverview"));

// const ProfileBuilder = lazy(() => import("../views/ProfileBuilder/ProfileBuilderForm"));
const UserProfile = lazy(() => import("../views/Candidate/UserProfile"));
const RecruiterProfile = lazy(()=>import("../views/Recruiter/Overview"));
const Resume = lazy(() => import("../views/Candidate/Resume"));
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
    // {
    //   path: "/build-profile",
    //   element: <ProfileBuilder />,
    //   children: [
    //     {
    //       path: "candidate",
    //       element: <ProfileBuilder />,
    //     },
    //     {
    //       path: "recruiter",
    //       element: <ProfileBuilder />,
    //     },
    //   ],
    // },
    {
      path: "/candidate",
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
      path: "/recruiter",
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
              <RecruiterProfile />
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
