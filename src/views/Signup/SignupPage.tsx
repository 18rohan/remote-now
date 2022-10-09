import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { SignupForm } from '../../components';
import art2 from '../../assets/art2.jpeg';

const SignupPage = () => {
    
  return (
    <Grid container spacing={0} width="100%"  >
    <Grid item  sm={6}>
      <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%" sx={{backgroundColor:'#B6E0CC'}}>
        
        <img src={art2} width="100%" height="100%"/>
      </Box>
    </Grid>
    <Grid item  sm={6}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" height="100vh" >
        <Typography color="black" variant="h3">Sign Up</Typography>
        <SignupForm/>
      </Box>
    </Grid>
  </Grid>
  )
}

export default SignupPage