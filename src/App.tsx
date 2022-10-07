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
      <Container disableGutters maxWidth="xl" sx={{ width: "100%" }}>
      <Navbar />
        <Suspense>
          <Routes />
        </Suspense>
        
        
      </Container>
    </>
  );
}

export default App;
