import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { CustomButton } from "../../components";

interface Props {
  image: string;
  heading1: string;
}
const HeroSection = ({ image, heading1 }: Props) => {
  return (
    <>
      <Grid container sx={{ backgroundColor: "#B6E0CC" }} minHeight={{md:"100vh", xs:"95vh"}}>
        <Grid
          item
          sm={8}
          xs={12}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          padding={{xs:'12px'}}
        >
          <Typography variant="h1" color="black">
            {heading1}
          </Typography>
          <Box my="20px">
            <Typography variant="h5" color="black">
              An employee is someone who gets paid to work for a person or
              company. Workers don't need to work full time to be considered
              employees
            </Typography>
          </Box>
          <Grid
            container
            columnGap={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={5}>
              <CustomButton
                label="Get Started"
                bgColor="transparent"
                textColor="black"
                border="2px solid black"
                shadow="4"
                mx="0px 20px 0px 0px"
                fullWidth="true"
              />
            </Grid>
            <Grid item xs={5}>
              <CustomButton
                label="How it works"
                bgColor="black"
                textColor="white"
                border="2px solid black"
                shadow="4"
                fullWidth="true"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sm={4}
          display={{xs:'none',md:"flex"}}
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={image}
            alt="albert einstein with tongue sticking out"
            style={{ width: "100%", borderRadius: "45%" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default HeroSection;
