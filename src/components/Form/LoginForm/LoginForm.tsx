import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import InputField from '../InputField'
import {useForm} from 'react-hook-form';
import { FormButton } from '../../../components';
import { AuthenticationServices } from '../../../services';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { User, UserCredential } from 'firebase/auth';
import { login } from '../../../store/features/UserSlice';
import { Link } from 'react-router-dom';

interface formData {
  email:string;
  password:string;
}
const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register,control, handleSubmit, formState:{errors}} =  useForm<formData>();
    const onSubmit = async(data:formData) =>{
      // console.log({"email":data.email,"password":data.password})
      try {
          const res:any = await AuthenticationServices.signInUser({"email":data.email,"password":data.password});
          console.log("Login: ",res);
          let Dispatchdata = {
            email: res.email,
            name:res.email.split('@')[0],
            lastName:res.email.split('@')[0],
            uid:res.uid,
            isCandidate:res.isCandidate,
          }
          console.log("Dispatchdata",Dispatchdata)
          dispatch(login(Dispatchdata));
          navigate('/home',{replace:true});
      } catch(err){
          return err;
      }
      
     
    }
  return (
    <Box display="flex" width="60%" height="40%" flexDirection="column" justifyContent="center" alignItems="center"  padding="8px">
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
            <FormButton bgColor='black' label='Sign In' textColor='white'  handleOnClick={handleSubmit(onSubmit)} fullWidth="true"/>
            <Typography color="black" fontWeight="500">Dont' have an account?<Link to="/build-profile/recruiter" style={{textDecoration:'none'}}><span style={{color:'blue', fontWeight:'bold'}}>Sign Up</span></Link></Typography>
    </Box>
  )
}

export default LoginForm