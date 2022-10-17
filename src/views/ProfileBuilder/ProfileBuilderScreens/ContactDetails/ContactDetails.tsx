import { Grid, Typography } from "@mui/material";
import React from "react";
import Container from "../../../../containers/Container";
import { InputField } from "../../../../components";
import { useForm } from "react-hook-form";

const ContactDetails = () => {
  const { control } = useForm();
  return (
    <Container>
      <Grid
        container
        alignItems="center"
        spacing={1}
        sx={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}
      >
        
        <Grid item sm={10}>
        <Typography variant="h2" color="black">
          Contact Details
        </Typography>
          <InputField
            label="email@website.com"
            FieldName="name"
            variant="outlined"
            fullWidth
            control={control}
            TopLabel="Enter your email id*"
            size="medium"
          />
          <InputField
            label="https://www.website.com"
            FieldName="website"
            variant="outlined"
            fullWidth
            TopLabel="Website"
            control={control}
            size="medium"
          />
          <InputField
            label="https://linkedin.com/in/username"
            FieldName="linkedIn_id"
            variant="outlined"
            TopLabel="LinkedIn"
            fullWidth
            control={control}
            size="medium"
          />
          <InputField
            label="https://github.com/username"
            FieldName="github"
            variant="outlined"
            control={control}
            fullWidth
            TopLabel="Github"
            size="medium"
          />
          <InputField
            label="https://twitter.com/username"
            FieldName="twitter_id"
            variant="outlined"
            TopLabel="Twitter"
            fullWidth
            control={control}
            size="medium"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactDetails;
