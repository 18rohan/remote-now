import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Container from "../../../../containers/Container";
import { InputField } from "../../../../components";
import { useForm, useFormContext } from "react-hook-form";
import ColumnContainer from "../../../../containers/ColumnContainer";
const PersonalDetails = () => {
  
  return (
      <ColumnContainer width="100%">
      <Grid container alignItems="center" spacing={1} sx={{marginBottom:'20px',display:'flex', justifyContent:'center'}}>
        <Grid item sm={10} xs={12}>
          <Typography variant="h2" color="black">
            Company Details
          </Typography>
          
        
          <InputField
            label="Company Size"
            FieldName="companySize"
            variant="outlined"
            fullWidth
            TopLabel="Whats the company size?*"
            size="medium"
          />
          <InputField
            label="Enter location"
            FieldName="location"
            variant="outlined"
            fullWidth
            TopLabel="Where are you based?*"
            size="medium"
          />

        
        <InputField
          label="Funding Raised"
          FieldName="raisedFunding"
          variant="outlined"
          fullWidth
          TopLabel="Raised Funding?"
          size="medium"
        />
        <InputField
          label="Year Founded"
          FieldName="yearFounded"
          variant="outlined"
          TopLabel="Year in which the company was founded?"
          fullWidth
          size="medium"
        />
        <InputField
          label="Area of work"
          FieldName="workArea"
          variant="outlined"
          TopLabel="Whats your area of work?"
          fullWidth
          size="medium"
        />
        <InputField
          label="Company Address"
          FieldName="companyAddress"
          variant="outlined"
          TopLabel="Address"
          fullWidth
          size="medium"
        />
      </Grid>
    </Grid>
    </ColumnContainer>
  );
};

export default PersonalDetails;
