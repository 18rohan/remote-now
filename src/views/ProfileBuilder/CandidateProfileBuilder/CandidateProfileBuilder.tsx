import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { ColorlibConnector, ColorlibStepIcon } from "../StepperForm/StepperForm";
import { useLocation, useNavigate } from "react-router";
import {
  PersonalDetails,
  ProfessionalExperience,
  ContactDetails,
} from "../CandidateProfileBuilder";
import { db } from "../../../firebase/firebase-config";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { CustomButton } from "../../../components";
import { Box } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import SignupPage from "../SignupPage/SignupPage";
import { AuthenticationServices } from "../../../services";
import { CompanyDetails} from "../RecruiterProfileBuilder";
import { current } from "@reduxjs/toolkit";
import CompanyContactDetails from "../RecruiterProfileBuilder/CompanyContactDetails";
import AuthenticationServicesRecruiter from "../../../services/AuthenticationServicesRecruiter";
import { login } from "../../../store/features/UserSlice";

interface Data {
  bio?: string;
  education?: string;
  email: string;
  experience?: string;
  github_id?: string;
  linkedin_id?: string;
  location?: string;
  name?: string;
  primary_role?: string;
  pronouns?: string;
  role?: string;
  twitter_id?: string;
  password: string;
}
interface formData {
  email: string;
  password: string;
}
interface Props {
    currentUserType:string;
}
const steps = [
  "Sign up",
  "Personal Details",
  "Professional Experience",
  "Contact Details",
];

const CandidateProfileBuilder = ({currentUserType}:Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  // * CurrentStep for Candidate Signup Form
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  

  // * Handling Form flow
  // * Candidate Flow
  async function NextStep(currentStep: number) {
    if (currentStep <= 2) {
      setCurrentStep((prevState) => prevState + 1);
      // alert(currentStep)
    } else return;
  }
  async function PrevStep(currentStep: number) {
    if (currentStep > 0) {
      setCurrentStep((prevState) => prevState - 1);
    } else return;
  }
  const renderStepContent = (currentStep: number) => {
    switch (currentStep) {
      case 0:
        return <SignupPage currentUser={currentUserType} />;
      case 1: 
        return <PersonalDetails currentUser={currentUserType} />;
      case 2: {
        return <ProfessionalExperience />;
      }
      case 3:
        return <ContactDetails />;
      default:
        break;
    }
  };




  
  // Creating instance of react-hook-form
  const methods = useForm();
  const { handleSubmit } = methods;

  // * Handling form submission - Candidate
  const onSubmit = async (data: any) => {
    const res: any = await AuthenticationServices.signUpUser({
      email: data?.email,
      password: data?.password,
    });
    console.log("Signup", data);
    setDoc(doc(db, "candidate", res.uid), {
      name: data.name,
      location: data.location,
      education: data.education,
      pronouns: data.pronouns,
      primary_role: data.primary_role,
      experience: data.experience,
      role: data.role,
      bio: data.bio,
      email: data.email,
      linkedin_id: data.linkedin_id,
      github_id: data.github_id,
      twitter_id: data.twitter_id,
    })
    let Dispatchdata = {
        email: data.email,
        name:data.name,
        lastName:data.name,
        uid:res.uid,
        isCandidate:data.isCandidate,
    }
    dispatch(login(Dispatchdata));
    navigate('/candidate/profile',{replace:true})

    // alert(JSON.stringify(data));
  };


 
  
  return (
    <>
    
      <Stack sx={{ width: "100%", backgroundColor:'white' }} spacing={3} paddingTop="50px" position="fixed" zIndex="2">
        
        <Stepper
          alternativeLabel
          activeStep={currentStep}
          connector={<ColorlibConnector />}
        >
        {
             steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))
             }
        </Stepper>
      </Stack>
      <Box padding="150px">
      <FormProvider {...methods}>
        <form>
          
          <Box maxHeight="800px">{renderStepContent(currentStep)}</Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            {currentStep > 0 && (
              <CustomButton
                label="Previous"
                bgColor="transparent"
                textColor="black"
                border="2px solid black"
                shadow="4"
                mx="0px 20px 0px 0px"
                width="300px"
                handleOnClick={() => PrevStep(currentStep)}
              />
            )}
            {currentStep < steps.length - 1 && (
              <CustomButton
                label="Next"
                bgColor="black"
                textColor="white"
                border="2px solid black"
                shadow="4"
                width="300px"
                handleOnClick={() => NextStep(currentStep)}
              />
            )}
            {currentStep === steps.length - 1 && (
              <CustomButton
                label="create profile"
                bgColor="black"
                textColor="white"
                border="2px solid black"
                shadow="4"
                width="300px"
                handleOnClick={handleSubmit(onSubmit)}
              />
            )}
          </Box>
        </form>
      </FormProvider>
      </Box>
    </>
  );
};

export default CandidateProfileBuilder;
