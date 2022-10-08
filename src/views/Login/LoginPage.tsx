import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { LoginForm } from '../../components';

const LoginPage = () => {
  return (
    <Grid container spacing={0} width="100%"  >
      <Grid item  sm={6}>
        <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%" sx={{backgroundColor:'#B6E0CC'}}>
          <Typography color="black" variant="h1">Sign In</Typography>
        </Box>
      </Grid>
      <Grid item  sm={6}>
        <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100vh" >
          <LoginForm/>
        </Box>
      </Grid>
    </Grid>
  )
}

export default LoginPage