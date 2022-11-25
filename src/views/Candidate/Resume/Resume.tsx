import { Box, Typography } from '@mui/material'
import { HomeContainer } from '../../../containers'
import ResumeCard from './ResumeCard'

const Resume = () => {
  return (
    <Box
    width="100%"
      
    display="flex"
    flexDirection="row"
    justifyContent="center"
    alignItems="center"
    padding="100px 0px 0px 0px"
    sx={{backgroundColor:'#E5E5E5'}}
  >
    {/* <Sidebar /> */}
    <HomeContainer  backgroundColor="white"  >
      {/* <Typography variant="h3" color="black">
        User Profile
      </Typography> */}
      <ResumeCard/>
    </HomeContainer>
  </Box>
  )
}

export default Resume