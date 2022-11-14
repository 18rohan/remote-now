import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

import {CandidateSignupForm} from '../CandidateProfileBuilder';
import {RecruiterSignupForm} from '../RecruiterProfileBuilder';

interface Props {
  currentUser:string;
}

const SignupPage = ({currentUser}:Props) => {
    
  return (
    <Grid container spacing={0} width="100%"  >
    
    <Grid item  sm={12}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%"  >
        {currentUser === 'candidate' ? (<Typography color="black" variant="h3">Sign Up</Typography>) : (<Typography color="black" variant="h3">Recruiter Sign Up</Typography>)}
        {currentUser === 'candidate' ? (<CandidateSignupForm />) : (<RecruiterSignupForm />)}
      </Box>
    </Grid>
  </Grid>
  )
}

export default SignupPage