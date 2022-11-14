import { Grid, Typography } from "@mui/material";
import React from "react";
import Container from "../../../../containers/Container";
import { InputField } from "../../../../components";
import { useForm } from "react-hook-form";
import ColumnContainer from "../../../../containers/ColumnContainer";

const CompanyContactDetails = () => {
  const { control } = useForm();
  return (
    <ColumnContainer>
      <Grid
        container
        alignItems="center"
        spacing={1}
        sx={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}
      >
        
        <Grid item sm={10} xs={12}>
        <Typography variant="h2" color="black">
          Contact Details
        </Typography>
          {/* <InputField
            label="https://email@website.com"
            FieldName="email"
            variant="outlined"
            fullWidth
            
            TopLabel="Enter your email id*"
            size="medium"
          /> */}
          {/* <InputField
            label="https://www.website.com"
            FieldName="website"
            variant="outlined"
            fullWidth
            TopLabel="Website"
            control={control}
            size="medium"
          /> */}
            <InputField
            label="Contact Person's Name"
            FieldName="recruiterName"
            variant="outlined"
            TopLabel="Recruiter Name"
            fullWidth
            
            size="medium"
          />
          <InputField
            label="Contact Person's Number"
            FieldName="recruiterContactNumber"
            variant="outlined"
            TopLabel="Recruiter Contact Number"
            fullWidth
            
            size="medium"
          />
          <InputField
            label="Contact Person's Email"
            FieldName="recruiterEmail"
            variant="outlined"
            TopLabel="Recruiter Contact Number"
            fullWidth
            
            size="medium"
          />
          <InputField
            label="https://www.website.com"
            FieldName="companyWebsite"
            variant="outlined"
            TopLabel="Company Website"
            fullWidth
            
            size="medium"
          />
          <InputField
            label="https://linkedin.com/in/username"
            FieldName="linkedin_id"
            variant="outlined"
            TopLabel="Company's LinkedIn"
            fullWidth
            
            size="medium"
          />
          
          <InputField
            label="https://twitter.com/username"
            FieldName="twitter_id"
            variant="outlined"
            TopLabel="Twitter"
            fullWidth
            
            size="medium"
          />
        </Grid>
      </Grid>
    </ColumnContainer>
  );
};

export default CompanyContactDetails;
