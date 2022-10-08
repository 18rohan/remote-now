import { Container } from "@mui/system";
import { Suspense, useState } from "react";
import "./App.css";
//Import component
import { Navbar } from "./components";
import { Home } from "./views";
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
      <Navbar />
        <Suspense>
          <Routes />
        </Suspense>
        
        
      </>
    </>
  );
}

export default App;


// Features to implement

// - Login/Signup using mobile number/OTP (firebase) and Email/password
// - Candidates should be able to login & apply to job posts
// - Recruiters should be able to login & create new job posts
// - Signup form for Recruiters and Candidates
// - Fetching data from third party APIs using react-query
// - Render as you fetch, or infinite scrolling for all the jobs posts


