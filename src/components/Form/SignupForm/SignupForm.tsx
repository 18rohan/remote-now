import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import InputField from '../../../components/Form/InputField'
import {useForm} from 'react-hook-form';
import { FormButton } from '../../../components';
import { AuthenticationServices } from '../../../services';

const SignupForm = () => {
    const {register, control, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = (data:any) => {
     AuthenticationServices.signUpUser({"email":data.emailId,"password":data.password});
    }
  return (
    <Box display="flex" width="70%" height="50%" flexDirection="column" justifyContent="flex-start" alignItems="center"  padding="8px">
        
    <InputField
          FieldName="name"
          label="Name"
          variant="outlined" 
          size="medium"
          control={control}
          fullWidth
        />
        <InputField
          FieldName="companyName"
          label="Last name"
          variant="outlined" 
          size="medium"
          control={control}
          fullWidth
        />
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
          fieldtype='password'
          control={control}
          fullWidth
        />
        <FormButton bgColor='black' label='Sign Up' textColor='white' type="submit" handleOnClick={handleSubmit(onSubmit)} />
        <Typography color="black" fontWeight="500">Have an account?<span style={{color:'blue', fontWeight:'bold'}}>Sign In</span></Typography>
</Box>
  )
}

export default SignupForm;