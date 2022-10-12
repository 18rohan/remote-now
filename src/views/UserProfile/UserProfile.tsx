import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Sidebar from "../../components/Sidebar";

import UserDetailCard from "../../components/UserProfileComponents/UserDetailsCard";
import ColumnContainer from "../../containers/ColumnContainer";

const UserProfile = () => {
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
      <ColumnContainer width="80%" backgroundColor="#E5E5E5"  >
        {/* <Typography variant="h3" color="black">
          User Profile
        </Typography> */}
        <UserDetailCard />
      </ColumnContainer>
    </Box>
  );
};

export default UserProfile;
