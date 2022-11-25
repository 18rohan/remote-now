

import { Suspense, useState } from "react";
import "./App.css";
//Import component
import { ThemeProvider } from "@mui/material/styles";
import { Loading } from "./views";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Routes from "./Routes/Routes";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "./store/store";
import { theme } from "./theme";
function App() {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();


  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Helmet>
          <title>Remote Now</title>
        </Helmet>
      </HelmetProvider>
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
    </ThemeProvider>
  );
}

export default App;
