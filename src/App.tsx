import * as React from 'react';
import { Container } from "@mui/system";
import { Suspense, useState } from "react";
import "./App.css";
//Import component

import { Loading } from "./views";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Routes from "./Routes/Routes";

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Remote Now</title>
        </Helmet>
      </HelmetProvider>
      <>
      
        <Suspense fallback={<Loading/>}>
          <Routes />
        </Suspense>
        
        
      </>
    </>
  );
}

export default App;


/**  TODO: Features to implement

* ! FIX: Private to public routing 
* ! FIX: Persistence of Redux store
* ! FIX: Navbar buttons naming accoring to status of login
* TODO: Login/Signup using mobile number/OTP (firebase) and Email/password
* TODO: Candidates should be able to login & apply to job posts
* TODO: Recruiters should be able to login & create new job posts
* TODO: Signup form for Recruiters and Candidates
* TODO: Fetching data from third party APIs using react-query
* TODO: Render as you fetch, or infinite scrolling for all the jobs posts

*/
