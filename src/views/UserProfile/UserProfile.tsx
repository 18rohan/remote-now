import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Sidebar from "../../components/Sidebar";

import UserDetailCard from "../../components/UserProfileComponents/UserDetailsCard";
import { HomeContainer } from "../../containers";
import ColumnContainer from "../../containers/ColumnContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { AuthenticationServices } from "../../services";
import { useForm } from "react-hook-form";


const UserProfile = () => {
  const userData = useSelector((state:RootState)=>state.user.user);
  const [formData, setformData] = React.useState(null);

  const FetchData = async() =>{
    try{
      if(userData?.uid){
        const res:any = await AuthenticationServices.getUserData(userData.uid); 
        setformData(res);
      }  
    } catch(err:any){
      console.log(err.message);
    }  
  }
  React.useEffect(()=>{
    if(userData?.uid){
      FetchData();
    }
  },[])
  
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
      {userData === null ? (<h1>Loading...</h1>) :(
      <HomeContainer width="80%" backgroundColor="#E5E5E5"  >
        {/* <Typography variant="h3" color="black">
          User Profile
        </Typography> */}
        
        <UserDetailCard  formData={formData}/>
      </HomeContainer>
      )}
    </Box>
  );
};

export default UserProfile;
