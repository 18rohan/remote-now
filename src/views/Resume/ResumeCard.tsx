import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { AiFillFilePdf } from "react-icons/ai";
const ResumeCard = () => {
  return (
    <Grid
      container
      sx={{ backgroundColor: "white" }}
      height="100vh"
      paddingTop="20px"
    >
      <Grid item xs={3}>
        <Box display="flex" flexDirection="column">
          <Typography variant="subtitle1" fontWeight="bold">
            Upload your recent resume or CV
          </Typography>
          <Typography variant="subtitle2">
            Upload your most up-to-date resume File types: PDF, DOCX, PPTX
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="flex-start"
        >
          <Typography variant="subtitle1" fontWeight="bold">
            RohanResume.pdf
          </Typography>
          <Box
            width="800px"
            height="200px"
            border="1px solid gray"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            borderRadius="20px"
            sx={{ backgroundColor: "#E5E5E5" }}
          >
            <AiFillFilePdf size={40} />
            <Typography variant="h5">Upload pdf</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ResumeCard;
