import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface CardDetailsProps{
    title:string,
    subheading:string,
    subheading2:string,
    contentText?:string

}
const CardDetails = ({title, subheading, subheading2, contentText}:CardDetailsProps) => {
  return (
    <Box width="100%" padding="12px">
      <Box
        width="100%"
        justifyContent="space-between"
        display="flex"
        flexDirection="row"
      >
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body1" fontWeight="400" color="blue">
            {subheading}
          </Typography>
        </Box>
        <Typography variant="body1" fontWeight="400" color="grey">
          Edit
        </Typography>
      </Box>
      <Typography variant="body2" color="gray">
        {subheading2}
      </Typography>
      {contentText && <Typography>
        {" "}
        {contentText}
      </Typography>}
    </Box>
  );
};


interface CardDetailsProps{
  title:string,
  subheading:string,
  subheading2:string,
  content?:string
}
const ProfileCardComponent = ({title, subheading, subheading2, content}:CardDetailsProps) => {
  return (
    <Grid
      container
      width="90%"
      padding="12px 8px 12px 8px"
      margin="20px 0px 0px 0px"
      border="0.5px solid grey"
    >
      <Grid item md={3}>
        <Box padding="12px">Company logo</Box>
      </Grid>
      <Grid item md={9}>
        <CardDetails title={title} subheading={subheading} subheading2={subheading2} contentText={content}/>
        {/* <CardDetails title="Software Developer" subheading="Stratonik" subheading2="Jan 2022 to Present" /> */}
      </Grid>
    </Grid>
  );
};

export default ProfileCardComponent;
