import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { ColorlibConnector, ColorlibStepIcon } from "./StepperForm/StepperForm";
import { useLocation, useNavigate } from "react-router";
import {
  PersonalDetails,
  ProfessionalExperience,
  ContactDetails,
} from "./CandidateProfileBuilder";
import { useForm, FormProvider } from "react-hook-form";
import {RecruiterProfileBuilder} from '../ProfileBuilder/RecruiterProfileBuilder';
import {CandidateProfileBuilder} from '../ProfileBuilder/CandidateProfileBuilder';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
// interface Data {
//   bio?: string;
//   education?: string;
//   email: string;
//   experience?: string;
//   github_id?: string;
//   linkedin_id?: string;
//   location?: string;
//   name?: string;
//   primary_role?: string;
//   pronouns?: string;
//   role?: string;
//   twitter_id?: string;
//   password: string;
// }
// interface formData {
//   email: string;
//   password: string;
// }

const ProfileBuilder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = useSelector((state:RootState)=>state.user.user);
  React.useEffect(()=>{
    if(currentUser !== null){
      navigate('/home',{replace:true});
    }
  },[])
  // * CurrentStep for Candidate Signup Form
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  //  * CurrentStep for Recruiter Signup Form
  const [recruiterCurrentStep, setRecruiterCurrentStep] = React.useState<number>(0);

  // * Checking if it is: Recruiter Flow or Candidate Flow 
  let currentLocationArray = location?.pathname.split("/");
  // * returns 'candidate'/'recruiter'
  let currentUserType = currentLocationArray[currentLocationArray.length - 1]; 


  // Creating instance of react-hook-form
  const methods = useForm();
  const { handleSubmit } = methods;

    console.log("Current user Types: ",currentUserType);
    console.log(typeof(currentUserType));
  if(currentUserType === 'candidate'){
    return (<CandidateProfileBuilder currentUserType={currentUserType}/>);
  } else if(currentUserType === 'recruiter') {
      return (<RecruiterProfileBuilder currentUserType={currentUserType}/>)
  }

};

export default ProfileBuilder;
