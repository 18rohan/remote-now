import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { LoginForm } from '../../components';
import graphics from '../../assets/graphics.jpeg';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router';

const LoginPage = () => {
  return (
    <Grid container spacing={0} width="100%"   >
      <Grid item  sm={6} height="100vh">
        <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%" sx={{backgroundColor:'orange',overflow:'hidden'}}>
          
          <img src={graphics}/>
        </Box>
      </Grid>
      <Grid item  sm={6}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" height="100vh" >
          <Typography variant='h3' color="black" fontWeight="500">Sign In</Typography>
          <LoginForm/>
        </Box>
      </Grid>
    </Grid>
  )
}

export default LoginPage