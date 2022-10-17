import { Grid, Typography } from "@mui/material";
import React from "react";
import Container from "../../../../containers/Container";
import { InputField } from "../../../../components";
import { useForm } from "react-hook-form";
const PersonalDetails = () => {
  const { control } = useForm();
  return (
    <Container>
      <Grid container alignItems="center" spacing={1} sx={{marginBottom:'20px',display:'flex', justifyContent:'center',}}>
        <Grid item sm={10}>
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
        </Grid>
        <Grid item sm={10} xs={12}>
          <InputField
            label="Enter location"
            FieldName="name"
            variant="outlined"
            fullWidth
            control={control}
            TopLabel="Where are you based?*"
            size="medium"
            
          />
        </Grid>
        <Grid item sm={10} xs={12}>
        <InputField
          label="Related education"
          FieldName="website"
          variant="outlined"
          fullWidth
          TopLabel="Education"
          control={control}
          size="medium"
        />
        </Grid>
        {/* <Grid item sm={10}>
        <InputField
          label="https://linkedin.com/in/username"
          FieldName="linkedIn_id"
          variant="outlined"
          TopLabel="LinkedIn"
          fullWidth
          control={control}
          size="medium"
        />
        </Grid> */}
        {/* <Grid item sm={10}>
        <InputField
          label="https://github.com/username"
          FieldName="github"
          variant="outlined"
          control={control}
          fullWidth
          TopLabel="Github"
          size="medium"
        />
        </Grid> */}
        <Grid item sm={10} xs={12}>
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
    </Container>
  );
};

export default PersonalDetails;
