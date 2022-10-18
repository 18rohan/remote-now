import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { ColorlibConnector, ColorlibStepIcon } from "./StepperForm";
import {
  PersonalDetails,
  ProfessionalExperience,
  ContactDetails,
} from "./ProfileBuilderScreens";
import { db } from "../../firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore"; 
import { CustomButton } from "../../components";
import { Box } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";


interface Data {
  bio?:string;
  education?:string;
  email?:string;
  experience?:string;
  github?:string;
  linkedin_id?:string;
  location?:string;
  name?:string;
  primary_role?:string;
  pronouns?:string;
  role?:string;
  twitter_id?:string;

}
const steps = [
  "Personal Details",
  "Professional Experience",
  "Contact Details",

];
const ProfileBuilder = () => {
  const [currentStep, setCurrentStep] = React.useState<number>(0);

  // Handling Form flow
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
        return <PersonalDetails />;
        break;
      case 1:
        return <ProfessionalExperience />;
        break;
      case 2:
        return <ContactDetails />;
        break;
      default:
        break;
    }
  };

  // Handling Form Submission 
  const submitForm = (data:any) =>{
    console.log(data);
  }

  // Creating instance of react-hook-form
  const methods = useForm();
  const { handleSubmit } = methods;
  const onSubmit = async (data: Data) => {
    console.log(data);
    addDoc(collection(db,"users"),{
    name:data.name,
    location:data.location,
    education:data.education,
    pronouns:data.pronouns,
    primary_role:data.primary_role,
    experience:data.experience,
    role:data.role,
    bio: data.bio,
    email:data.email,
    linkedin_id:data.linkedin_id,
    github_id:data.github,
    twitter_id:data.twitter_id,


  }).then((res)=>console.log(res))
  .catch((err)=>console.log(err));
  alert(JSON.stringify(data));
  // // NextStep(currentStep);
};
  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={3} padding="20px">
        <Stepper
          alternativeLabel
          activeStep={currentStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
      <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
        <Box maxHeight="800px">{renderStepContent(currentStep)}</Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          {((currentStep > 0) && 
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
          {currentStep < steps.length-1 && 
          <CustomButton
            label="Next"
            bgColor="black"
            textColor="white"
            border="2px solid black"
            shadow="4"
            
            width="300px"
            handleOnClick={() => NextStep(currentStep)}
          />
        }
         {currentStep === steps.length -1 && (
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
    </>
  );
};

export default ProfileBuilder;
