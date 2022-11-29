import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Section } from "../../containers";
import CenterBox from "../../containers/CenterBox";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: "#000", width: "100%", height: "300px" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CenterBox ContainerWidth="100%">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          width="100%"
        >
          <Typography variant="h4" color="white" fontWeight="100">
            remote-now
          </Typography>
          <Box
            display="flex"
            justifyContent="space-around"
            flexDirection="row"
            alignItems="center"
            width="40%"
            padding="20px"
          >
            <Typography fontWeight="300" color="#E5E5E5" variant="subtitle1">
              Home
            </Typography>

            <Typography fontWeight="300" variant="subtitle1" color="#E5E5E5">
              Recruiter Login
            </Typography>
            <Typography fontWeight="300" variant="subtitle1" color="#E5E5E5">
              Recruiter Signup
            </Typography>
            <Typography fontWeight="300" variant="subtitle1" color="#E5E5E5">
              Jobs
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            flexDirection="row"
            alignItems="center"
            width="25%"
            padding="20px"
          >
            <Typography variant="h6" color="black">
              <AiFillLinkedin size={32} color="#E5E5E5" />
            </Typography>
            <Typography variant="h6" color="#E5E5E5">
              <AiFillGithub size={32} />
            </Typography>
            <Typography variant="h6" color="#E5E5E5">
              <AiOutlineTwitter size={32} />
            </Typography>

            <Typography variant="h6" color="#E5E5E5">
              <AiFillInstagram size={32} />
            </Typography>
          </Box>
          <Typography fontWeight="300" variant="body2" color="#E5E5E5">
              © 2022 remote-now. All rights reserved.
            </Typography>
        </Box>
      </CenterBox>
    </Box>
  );
};

export default Footer;
