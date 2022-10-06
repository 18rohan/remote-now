import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import {CustomButton} from '../../components';
const HeroSection = () => {
  return (
    <Box sx={{backgroundColor:'#B6E0CC'}} marginTop="50px" marginBottom="40px" padding="25px" minHeight="90vh" display="flex"  alignItems="center">
    <Box width="55%" >
        <Typography variant='h1' color="black" fontWeight="500">It has never been easier to hire perfect employee</Typography>
        <Box my="20px">
            <Typography variant="h5" color="black">An employee is someone who gets paid to work for a person or company. Workers don't need to work full time to be considered employees</Typography>
        </Box>
        <Box width="60%" display="flex" flexDirection="row" justifyContent="space-around" alignItems="space-between">
        <CustomButton  label="Get Started" bgColor='transparent' textColor='black' border='2px solid black' shadow="4" mx="0px 20px 0px 0px"/>
        <CustomButton  label="Get Started" bgColor='black' textColor='white' border='2px solid black' shadow="4"/>
        </Box>
    </Box>
    </Box>
  )
}

export default HeroSection;