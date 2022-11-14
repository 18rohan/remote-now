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
// import { useSelector } from "react-redux";
// import { RootState } from "../../store/store";
import SignupPage from "../SignupPage/SignupPage";
// import { AuthenticationServices } from "../../services";
import { CompanyDetails} from "../RecruiterProfileBuilder";
import { current } from "@reduxjs/toolkit";
import CompanyContactDetails from "../RecruiterProfileBuilder/CompanyContactDetails";
import { useForm,FormProvider } from "react-hook-form";
import AuthenticationServicesRecruiter from "../../../services/AuthenticationServicesRecruiter";
import { useDispatch } from "react-redux";
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

const stepsRecruiter = [
  "Recruiter Sign up",
  "Company Details",
  "Contact Details",
];
interface Props {
    currentUserType:string;
}
const RecruiterProfileBuilder = ({currentUserType}:Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // * CurrentStep for Candidate Signup Form
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  //  * CurrentStep for Recruiter Signup Form
//   const [recruiterCurrentStep, setRecruiterCurrentStep] = React.useState<number>(0);


 

  // * Recruiter Flow
  async function RecruiterNextStep(recruiterCurrentStep: number) {
    if (recruiterCurrentStep <= 2) {
        setCurrentStep((prevState) => prevState + 1);
      // alert(currentStep)
    } else return;
  }
  async function RecruiterPrevStep(recruiterCurrentStep: number) {
    if (recruiterCurrentStep > 0) {
        setCurrentStep((prevState) => prevState - 1);
    } else return;
  }
  const renderRecruiterStepContent = (recruiterCurrentStep: number) => {
    switch (recruiterCurrentStep) {
      case 0:
        return <SignupPage currentUser={currentUserType} />;
      case 1: 
        return <CompanyDetails />;
      case 2: 
        return <CompanyContactDetails />;
      default:
        break;
    }
  };

  // Creating instance of react-hook-form
  const methods = useForm();
  const { handleSubmit } = methods;

 

  //  * Handling form submission - Recruiter
  const onSubmit = async(data:any) =>{
    const res:any =  await AuthenticationServicesRecruiter.signUpRecruiter({ email: data?.recruiterEmail,password: data?.password,});
    console.log("Signup Recruiter: ",res);
    await setDoc(doc(db,"recruiter",res.uid),{
      companyName:data.companyName,
      recruiterName:data.recruiterName,
      recruiterEmail:data.recruiterEmail,
      password:data.password,
      companySize:data.companySize,
      location:data.location,
      raisedFunding:data.raisedFunding,
      yearFounded:data.yearFounded,
      workArea:data.workArea,
      companyAddress:data.companyAddress,
      recruiterContactNumber:data.recruiterContactNumber,
      companyWebsite:data.companyWebsite,
      linkedin_Id:data.linkedin_id,
      twitter_Id:data.twitter_id
    });
    let Dispatchdata = {
            email: data.recruiterEmail,
            name:data.companyName,
            lastName:data.recruiterEmail.split('@')[0],
            uid:res.uid,
            isCandidate:data.isCandidate,
        }
        dispatch(login(Dispatchdata));
        navigate('/user/profile',{replace:true})

    
    // alert(JSON.stringify(data));
  }
  
  return (
    <>
    
      <Stack sx={{ width: "100%", backgroundColor:'white' }} spacing={3} paddingTop="50px" position="fixed" zIndex="2">
        
        <Stepper
          alternativeLabel
          activeStep={currentStep}
          connector={<ColorlibConnector />}
        >
          { stepsRecruiter.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
        </Stepper>
      </Stack>
      <Box padding="150px">
      <FormProvider {...methods}>
        <form>
          
          <Box maxHeight="800px">{renderRecruiterStepContent(currentStep)}</Box>
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
                handleOnClick={() => RecruiterPrevStep(currentStep)}
              />
            )}
            {currentStep < stepsRecruiter.length - 1 && (
              <CustomButton
                label="Next"
                bgColor="black"
                textColor="white"
                border="2px solid black"
                shadow="4"
                width="300px"
                handleOnClick={() => RecruiterNextStep(currentStep)}
              />
            )}
            {currentStep === stepsRecruiter.length - 1 && (
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

export default RecruiterProfileBuilder;
