import { Box, Typography } from "@mui/material";
import React from "react";
import { HeroSection, Navbar } from "../../components";
import art from "../../assets/graphics2.png";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const LandingPage = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      height="100vh"
      sx={{ backgroundColor: "black" }}
    >
      <Navbar user={user} />
      <HeroSection image={art} heading1="It has never been easier to hire perfect employee" />
      <Typography variant="h3">Landing Page</Typography>

      <Box width="30%" sx={{ backgroundColor: "white" }}>
        <Typography>Candidates</Typography>
      </Box>
      <Box>
        <Typography>Recruiters</Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
