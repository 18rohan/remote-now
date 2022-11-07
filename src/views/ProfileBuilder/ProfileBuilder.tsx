import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { ColorlibConnector, ColorlibStepIcon } from "./StepperForm";
import { useNavigate } from "react-router";
import {
  PersonalDetails,
  ProfessionalExperience,
  ContactDetails,
} from "./ProfileBuilderScreens";
import { db } from "../../firebase/firebase-config";
import { collection, addDoc,setDoc, doc } from "firebase/firestore"; 
import { CustomButton } from "../../components";
import { Box } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import SignupPage from '../Signup'
import { AuthenticationServices } from "../../services";



interface Data {
  bio?:string;
  education?:string;
  email:string;
  experience?:string;
  github_id?:string;
  linkedin_id?:string;
  location?:string;
  name?:string;
  primary_role?:string;
  pronouns?:string;
  role?:string;
  twitter_id?:string;
  password:string;


}
interface formData {
  email:string;
  password:string;

}
const steps = [
  "Sign up",
  "Personal Details",
  "Professional Experience",
  "Contact Details",

];
const ProfileBuilder = () => {
  const navigate = useNavigate();
  const user = useSelector((state:RootState)=>state.user?.user);
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
        return <SignupPage />
      case 1:
        return <PersonalDetails />;
      case 2:
        return <ProfessionalExperience />;
      case 3:
        return <ContactDetails />;
      default:
        break;
    }
  };

  
  // Creating instance of react-hook-form
  const methods = useForm();
  const { handleSubmit } = methods;

  // Handling form submission
  const onSubmit = async (data: any) => {
    const res:any = await AuthenticationServices.signUpUser({"email":data?.email,"password":data?.password});
    console.log("Signup",data);
    setDoc(doc(db,"users", res.uid),{
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
    github_id:data.github_id,
    twitter_id:data.twitter_id,


  }).then((res)=>navigate('/user/profile',{replace:true}))
  .catch((err)=>console.log(err));
  alert(JSON.stringify(data));
  
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
          <form >
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
