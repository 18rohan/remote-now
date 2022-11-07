import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { SignupForm } from '../../components';
import art2 from '../../assets/art2.jpeg';

const SignupPage = () => {
    
  return (
    <Grid container spacing={0} width="100%"  >
    
    <Grid item  sm={12}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%"  >
        <Typography color="black" variant="h3">Sign Up</Typography>
        <SignupForm/>
      </Box>
    </Grid>
  </Grid>
  )
}

export default SignupPage