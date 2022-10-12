import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Albert from "../../assets/user-avatar.png";
import ColumnContainer from "../../containers/ColumnContainer";
import InputField from "../Form/InputField";
import ProfileCardComponent from "../UserProfileComponents/UserProfileCard";

interface RowProps {
  label: string;
  data: string;
}
const InfoRow = ({ label, data }: RowProps) => {
  return (
    <Box
      width="100%"
      flexDirection="column"
      display="flex"
      padding="4px 0px 4px 12px"
      justifyContent="flex-center"
      alignItems="flex-start"
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        textTransform="uppercase"
      >
        {label}
      </Typography>
      <Typography variant="subtitle2" fontWeight="500">
        {data}
      </Typography>
    </Box>
  );
};

const UserDetailsCard = () => {
  const { control } = useForm();
  return (
    <Grid
      container
      width="100%"
      sx={{
        border: "1px solid black",
        padding: "12px 12px 12px 12px",
        backgroundColor: "white",

        boxShadow: "7px 10px black",
      }}
    >
      <Grid item sm={3}>
        <ColumnContainer sx={{ alignItems: "flex-start", padding: "12px" }}>
          <Typography variant="subtitle1" fontWeight="600">
            About
          </Typography>

          <Typography variant="body2">
            Tell us about yourself so startups knows who are
          </Typography>
        </ColumnContainer>
      </Grid>
      <Grid item sm={7} margin="15px 0px 0px 15px">
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
          label="Where are you based"
          FieldName="location"
          variant="outlined"
          fullWidth
          TopLabel="Where are you based?*"
          control={control}
          size="medium"
        />
        <InputField
          label="Select your primary role"
          FieldName="role"
          variant="outlined"
          control={control}
          TopLabel="Select your primary role*"
          fullWidth
          size="medium"
        />
        <InputField
          label="Where are you based"
          FieldName="location"
          variant="outlined"
          fullWidth
          TopLabel="Open to the following roles"
          control={control}
          size="medium"
        />
      </Grid>
      <Grid item sm={3}>
        <ColumnContainer sx={{ alignItems: "flex-start", padding: "12px" }}>
          <Typography variant="subtitle1" fontWeight="600">
            Social Profiles
          </Typography>

          <Typography variant="body2">Where can people find you</Typography>
        </ColumnContainer>
      </Grid>
      <Grid item sm={7} margin="15px 0px 0px 15px">
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
      <Grid item sm={3}>
        <ColumnContainer sx={{ alignItems: "flex-start", padding: "12px" }}>
          <Typography variant="subtitle1" fontWeight="600">
            Your Work Experience
          </Typography>

          <Typography variant="body2">
            What other positions have your held?
          </Typography>
        </ColumnContainer>
      </Grid>
      <Grid item sm={8} margin="15px 0px 0px 15px">
        <ProfileCardComponent
          title="Software Developer"
          subheading="Stratonik"
          subheading2="Jan 2022 to Present"
          content="Data acquisition, structuring and cleaning of the data - Contributed in developing dashboard for live analysis of the data - Performing exploratory and explanatory data analysis - Working with python, pandas, visualisation libraries, dash, jupyter notebook"
        />
        <ProfileCardComponent
          title="Software Developer"
          subheading="Stratonik"
          subheading2="Jan 2022 to Present"
          content="Data acquisition, structuring and cleaning of the data - Contributed in developing dashboard for live analysis of the data - Performing exploratory and explanatory data analysis - Working with python, pandas, visualisation libraries, dash, jupyter notebook"
        />

        {/* <InputField
          label="Your name"
          FieldName="name"
          variant="outlined"
          fullWidth
          control={control}
          size="medium"
        />
        <InputField
          label="Where are you based"
          FieldName="location"
          variant="outlined"
          fullWidth
          control={control}
          size="medium"
        />
        <InputField
          label="Select your primary role"
          FieldName="role"
          variant="outlined"
          control={control}
          fullWidth
          size="medium"
        />
        <InputField
          label="Where are you based"
          FieldName="location"
          variant="outlined"
          fullWidth
          control={control}
          size="medium"
        /> */}
      </Grid>
      <Grid item sm={3}>
        <ColumnContainer sx={{ alignItems: "flex-start", padding: "12px" }}>
          <Typography variant="subtitle1" fontWeight="600">
            Education
          </Typography>

          <Typography variant="body2">
            What schools have you studied at?
          </Typography>
        </ColumnContainer>
      </Grid>
      <Grid item sm={8} margin="15px 0px 0px 15px">
        <ProfileCardComponent
          title="Education"
          subheading="Manav Rachna University"
          subheading2="7.9/10 CGPA"
        />
      </Grid>
    </Grid>
  );
};

export default UserDetailsCard;
