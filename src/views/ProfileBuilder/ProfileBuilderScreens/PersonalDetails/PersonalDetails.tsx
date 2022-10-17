import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Container from "../../../../containers/Container";
import { InputField } from "../../../../components";
import { useForm } from "react-hook-form";
import ColumnContainer from "../../../../containers/ColumnContainer";
const PersonalDetails = () => {
  const { control } = useForm();
  return (
      <ColumnContainer width="100%">
      <Grid container alignItems="center" spacing={1} sx={{marginBottom:'20px',display:'flex', justifyContent:'center'}}>
        <Grid item sm={10} xs={12}>
          <Typography variant="h2" color="black">
            Personal Details
          </Typography>
          <InputField
            label="Your name"
            FieldName="name"
            variant="outlined"
            fullWidth
            control={control}
            TopLabel="Whats your name?*"
            size="medium"
            
          />
        
        
          <InputField
            label="Enter location"
            FieldName="name"
            variant="outlined"
            fullWidth
            control={control}
            TopLabel="Where are you based?*"
            size="medium"
            
          />
        
        <InputField
          label="Related education"
          FieldName="website"
          variant="outlined"
          fullWidth
          TopLabel="Education"
          control={control}
          size="medium"
        />
        <InputField
          label="Identity"
          FieldName="twitter_id"
          variant="outlined"
          TopLabel="What are your pronouns?"
          fullWidth
          control={control}
          size="medium"
        />
      </Grid>
    </Grid>
    </ColumnContainer>
  );
};

export default PersonalDetails;
