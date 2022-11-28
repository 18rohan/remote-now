import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Container from "../../../../containers/Container";
import { InputField } from "../../../../components";
import { useForm, useFormContext } from "react-hook-form";
import ColumnContainer from "../../../../containers/ColumnContainer";

interface Props {
  currentUser:string;
}

const PersonalDetails = ({currentUser}:Props) => {
  
  return (
      <ColumnContainer width="100%">
      <Grid container alignItems="center" spacing={1} sx={{marginBottom:'20px',display:'flex', justifyContent:'center'}} padding={{xs:'12px',sm:'0px'}}>
        <Grid item sm={10} xs={12}>
          <Typography variant="h2" color="black">
            Personal Details
          </Typography>
          
        
          <InputField
            label="Enter location"
            FieldName="location"
            variant="outlined"
            fullWidth
            
            TopLabel="Where are you based?*"
            size="medium"
            
          />
        
        <InputField
          label="Related education"
          FieldName="education"
          variant="outlined"
          fullWidth
          TopLabel="Education"
          
          size="medium"
        />
        <InputField
          label="Identity"
          FieldName="pronouns"
          variant="outlined"
          TopLabel="What are your pronouns?"
          fullWidth
          
          size="medium"
        />
      </Grid>
    </Grid>
    </ColumnContainer>
  );
};

export default PersonalDetails;
