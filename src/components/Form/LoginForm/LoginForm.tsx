import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import InputField from '../InputField'
import {useForm} from 'react-hook-form';
import { FormButton } from '../../../components';
import { AuthenticationServices } from '../../../services';
import { useNavigate } from 'react-router';
const LoginForm = () => {
    const navigate = useNavigate();
    const {register,control, handleSubmit, formState:{errors}} =  useForm();
    const onSubmit = async(data:any) =>{
      // console.log({"email":data.email,"password":data.password})
      AuthenticationServices.signInUser({"email":data.email,"password":data.password})
      .then(()=>{navigate('/home')})
      .catch((error)=>{
        return null;
      });
    }
  return (
    <Box display="flex" width="70%" height="40%" flexDirection="column" justifyContent="center" alignItems="center"  padding="8px">
            <InputField
              FieldName="email"
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
              fieldtype='password'
              control={control}
              fullWidth
            />
            <FormButton bgColor='black' label='Sign Up' textColor='white' type="submit" handleOnClick={handleSubmit(onSubmit)} />
            <Typography color="black" fontWeight="500">Have an account?<span style={{color:'blue', fontWeight:'bold'}}>Sign In</span></Typography>
    </Box>
  )
}

export default LoginForm