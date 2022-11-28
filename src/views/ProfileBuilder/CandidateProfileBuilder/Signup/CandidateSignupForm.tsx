import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import InputField from '../../../../components/Form/InputField'
import {useForm} from 'react-hook-form';
import { FormButton } from '../../../../components';
import { AuthenticationServices } from '../../../../services';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { login } from '../../../../store/features/UserSlice';

interface formData {
  email:string;
  password:string;

}


const CandidateSignupForm = () => {
    const dispatch = useDispatch();
    // const {register, control, handleSubmit, formState:{errors}} = useForm<formData>();
    const navigate = useNavigate();
    
  return (
    <Box display="flex" width={{sm:"70%",xs:'100%'}} height="50%" flexDirection="column" justifyContent="flex-start" alignItems="center"   padding="8px">
        
    <InputField
          FieldName="name"
          label="Name"
          variant="outlined" 
          size="medium"
          // control={control}
          fullWidth
        />
        <InputField
          FieldName="lastName"
          label="Last name"
          variant="outlined" 
          size="medium"
          // control={control}
          fullWidth
        />
        <InputField
          FieldName="email"
          label="Email id"
          variant="outlined" 
          size="medium"
          // control={control}
          fullWidth
        />
        <InputField
          FieldName="password"
          label="Password"
          variant="outlined" 
          size="medium"
          fieldtype='password'
          // control={control}
          fullWidth
        />
        {/* <FormButton bgColor='black' label='Sign Up' textColor='white'  handleOnClick={handleSubmit(onSubmit)} fullWidth="true"/> */}
        <Typography color="black" fontWeight="500">Have an account?<span style={{color:'blue', fontWeight:'bold'}}>Sign In</span></Typography>
</Box>
  )
}

export default CandidateSignupForm;