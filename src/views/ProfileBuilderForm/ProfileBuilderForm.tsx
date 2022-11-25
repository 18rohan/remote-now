import * as React from "react";

import { useLocation, useNavigate } from "react-router";

import { useForm, FormProvider } from "react-hook-form";
import {RecruiterProfileBuilder} from '../ProfileBuilder/RecruiterProfileBuilder';
import {CandidateProfileBuilder} from '../ProfileBuilder/CandidateProfileBuilder';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const ProfileBuilderForm = () => {
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
  
    // return (
    //   {currentUserType.toString() === 'candidate' ? (<CandidateProfileBuilder currentUserType={currentUserType}/>) : }
    // );
  if(currentUserType === 'candidate'){
    return (<CandidateProfileBuilder currentUserType={currentUserType}/>);
  } else {
      return (<RecruiterProfileBuilder currentUserType={currentUserType}/>)
  }

};

export default ProfileBuilderForm;
