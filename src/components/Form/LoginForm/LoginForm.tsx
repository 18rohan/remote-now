import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import InputField from '../InputField'
import {useForm} from 'react-hook-form';
import { FormButton } from '../../../components';
const LoginForm = () => {
    const {register,control, handleSubmit, formState:{errors}} =  useForm();

  return (
    <Box display="flex" width="70%" height="50%" flexDirection="column" justifyContent="center" alignItems="center"  padding="8px">

            <InputField
              FieldName="emailId"
              label="Email id"
              variant="outlined" 
              size="medium"
              control={control}
              fullWidth
            />
            <InputField
              FieldName="password"
              label="Password"
              variant="outlined" 
              size="medium"
              control={control}
              fullWidth
            />
            <FormButton bgColor='black' label='Sign Up' textColor='white'  />
            <Typography color="black" fontWeight="500">Have an account?<span style={{color:'blue', fontWeight:'bold'}}>Sign In</span></Typography>
    </Box>
  )
}

export default LoginForm