import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import InputField from '../../../components/Form/InputField'
import {useForm} from 'react-hook-form';
import { FormButton } from '../../../components';
import { AuthenticationServices } from '../../../services';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/features/UserSlice';

interface formData {
  email:string;
  password:string;

}
const SignupForm = () => {
    const dispatch = useDispatch();
    // const {register, control, handleSubmit, formState:{errors}} = useForm<formData>();
    const navigate = useNavigate();
    // const onSubmit = async(data:formData) => {
    //   try {
    //     console.log("data:",data)
    //     const res:any = await AuthenticationServices.signUpUser({"email":data.email,"password":data.password});
    //     console.log("Login: ",res);
    //     let Dispatchdata = {
    //       email: res.email,
    //       name:res.email.split('@')[0],
    //       lastName:res.email.split('@')[0],
    //       uid:res.uid,
    //     }
    //     console.log("Dispatchdata",Dispatchdata)
    //     dispatch(login(Dispatchdata));
    //     navigate('/build-profile', {replace:true});
    // } catch(err){
    //     return err;
    // }
    // }
  return (
    <Box display="flex" width="70%" height="50%" flexDirection="column" justifyContent="flex-start" alignItems="center"  padding="8px">
        
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

export default SignupForm;