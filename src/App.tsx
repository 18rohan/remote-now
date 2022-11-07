import * as React from "react";
import { Container } from "@mui/system";
import { Suspense, useState } from "react";
import "./App.css";
//Import component

import { Loading } from "./views";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Routes from "./Routes/Routes";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "./store/store";
function App() {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user.user === null) {
      navigate("/", { replace: true });
    }
  }, [user]);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Remote Now</title>
        </Helmet>
      </HelmetProvider>
      <>
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </>
    </>
  );
}

export default App;
