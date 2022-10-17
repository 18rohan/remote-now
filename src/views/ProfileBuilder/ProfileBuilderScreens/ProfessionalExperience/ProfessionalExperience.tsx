import { Grid, Typography } from "@mui/material";
import React from "react";
import Container from "../../../../containers/Container";
import { InputField } from "../../../../components";
import { useForm } from "react-hook-form";

const ProfessionalExperience = () => {
  const { control } = useForm();
  return (
    <>
      <Grid container alignItems="center" spacing={1} sx={{marginBottom:'20px',display:'flex', justifyContent:'center',}}>
        <Grid item sm={10}>
          <Typography variant="h2" color="black">
            Professional Experience
          </Typography>
          <InputField
            label="Primary role"
            FieldName="name"
            variant="outlined"
            fullWidth
            control={control}
            TopLabel="Select your primary role*"
            size="medium"
            
          />
        </Grid>
        <Grid item sm={10} xs={12}>
          <InputField
            label="Experience(in years)"
            FieldName="name"
            variant="outlined"
            fullWidth
            control={control}
            TopLabel="Years of experience*"
            size="medium"
            
          />
        </Grid>
        <Grid item sm={10} xs={12}>
        <InputField
          label="Select role"
          FieldName="website"
          variant="outlined"
          fullWidth
          TopLabel="Open to the following roles"
          control={control}
          size="medium"
        />
        </Grid>
        <Grid item sm={10} xs={12}>
        <InputField
          label="Write your bio in under 200 words."
          FieldName="twitter_id"
          variant="outlined"
          TopLabel="Your bio"
          fullWidth
          control={control}
          size="medium"
        />
        </Grid>
       
      </Grid>
    </>
  );
};

export default ProfessionalExperience;
