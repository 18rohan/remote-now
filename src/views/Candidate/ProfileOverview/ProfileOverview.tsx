import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Sidebar from "../../../components/Sidebar";

import UserDetailCard from "../../../components/UserProfileComponents/UserDetailsCard";
import { HomeContainer } from "../../../containers";
import ColumnContainer from "../../../containers/ColumnContainer";
import ProfileOverviewCard from "./ProfileOverviewCard";

const ProfileOverview = () => {
  return (
    <Box
      width="100%"
      display="flex"
      padding="100px 0px 0px 0px"
      sx={{backgroundColor:'#E5E5E5'}}
    >
      {/* <Sidebar /> */}
      <HomeContainer backgroundColor="#E5E5E5"  >
        
        <ProfileOverviewCard/>
      </HomeContainer>
    </Box>
  );
};

export default ProfileOverview;
