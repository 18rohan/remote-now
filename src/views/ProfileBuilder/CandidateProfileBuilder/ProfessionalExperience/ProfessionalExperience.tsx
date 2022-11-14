import { Grid, Typography } from "@mui/material";
import React from "react";
import Container from "../../../../containers/Container";
import { InputField } from "../../../../components";
import { useForm } from "react-hook-form";


const ProfessionalExperience = () => {
  
  return (
    <>
      <Grid container alignItems="center" spacing={0} sx={{marginBottom:'20px',display:'flex', justifyContent:'center',}}>
        <Grid item sm={10} xs={12}>
          <Typography variant="h2" color="black">
            Professional Experience
          </Typography>
          <InputField
            label="Primary role"
            FieldName="primary_role"
            variant="outlined"
            fullWidth
            
            TopLabel="Select your primary role*"
            size="medium"
            
          />
        
        
          <InputField
            label="Experience(in years)"
            FieldName="experience"
            variant="outlined"
            fullWidth
            
            TopLabel="Years of experience*"
            size="medium"
            
          />
        
        
        <InputField
          label="Select role"
          FieldName="role"
          variant="outlined"
          fullWidth
          TopLabel="Open to the following roles"
          
          size="medium"
        />
        
        {/* <TextArea 
        label="Write your bio in under 200 words."
        FieldName="bio"
      
        />
        */}
        <InputField
          label="Write your bio in under 200 words."
          FieldName="bio"
          variant="outlined"
          TopLabel="Your bio"
          fullWidth
          
          size="medium"
        />
        </Grid>
       
      </Grid>
    </>
  );
};

export default ProfessionalExperience;
