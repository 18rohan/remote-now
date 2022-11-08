import { Box, Typography } from '@mui/material'
import React from 'react'
import Sidebar from '../../components/Sidebar'
import { HomeContainer } from '../../containers'
import ResumeCard from './ResumeCard'

const Resume = () => {
  return (
    <Box
    width="100%"
    // height="100vh"
    display="flex"
    
    justifyContent="center"
    alignItems="center"
    padding="100px 0px 0px 0px"
    sx={{backgroundColor:'white'}}
  >
    <Sidebar />
    <HomeContainer width="80%"   >
      {/* <Typography variant="h3" color="black">
        User Profile
      </Typography> */}
      <ResumeCard/>
    </HomeContainer>
  </Box>
  )
}

export default Resume