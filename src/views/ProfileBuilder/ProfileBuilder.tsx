import * as React from 'react';
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { QontoConnector, QontoStepIcon } from "./StepperForm";
import ColumnContainer from "../../containers/ColumnContainer";
import Container from "../../containers/Container";
import { CustomButton } from "../../components";
import { Box } from "@mui/system";
import { PersonalDetails,ProfessionalExperience,ContactDetails } from './ProfileBuilderScreens';
const steps = [
  "Personal Details",
  "Professional Experience",
  "Contact Details",
];


const ProfileBuilder = () => {
  const [currentStep, setCurrentStep] = React.useState<number>(0);

  async function NextStep(currentStep:number) {
    if(currentStep <= 2){
      setCurrentStep((prevState)=>prevState + 1);
      // alert(currentStep)
    } else return;
  }
  async function PrevStep(currentStep:number) {
    if(currentStep > 0){
      setCurrentStep((prevState)=>prevState - 1);
    } else return;
  }
  const renderStepContent = (currentStep:number) =>{
    switch (currentStep) {
      case 0:
          return <PersonalDetails/>
        break;
      case 1:
        return <ProfessionalExperience/>
        break;
      case 2:
        return <ContactDetails />
        break;
      default:
        break;
    }
  }
  return (
    <Container padding="40px">
      <Stepper alternativeLabel activeStep={currentStep} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {renderStepContent(currentStep)}
      <Box width="100%" display="flex" flexDirection="row" justifyContent="space-around">
      <CustomButton
                label="Previous"
                bgColor="transparent"
                textColor="black"
                border="2px solid black"
                shadow="4"
                mx="0px 20px 0px 0px"
                type="button"
                width="200px"
                handleOnClick={()=>PrevStep(currentStep)}
              />
              <CustomButton
                label="Next"
                bgColor="black"
                textColor="white" 
                border="2px solid black"
                shadow="4"
                width="200px"
                type="button"
                handleOnClick={()=>NextStep(currentStep)}
              />
      </Box>
    </Container>
  );
};

export default ProfileBuilder;
