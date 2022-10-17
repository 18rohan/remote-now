import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Sidebar from "../../components/Sidebar";

import UserDetailCard from "../../components/UserProfileComponents/UserDetailsCard";
import { HomeContainer } from "../../containers";
import ColumnContainer from "../../containers/ColumnContainer";

const ProfileOverview = () => {
  return (
    <Box
      width="100%"
      
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      margin="100px 0px 0px 0px"
      sx={{backgroundColor:'#E5E5E5'}}
    >
      <Sidebar />
      <HomeContainer width="80%" backgroundColor="#E5E5E5"  >
        {/* <Typography variant="h3" color="black">
          User Profile
        </Typography> */}
        <h1>Profile overview</h1>
      </HomeContainer>
    </Box>
  );
};

export default ProfileOverview;
