import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { CustomButton } from "../../components";
interface Props {
  image: string;
  heading1:string;
}
const HeroSection = ({ image, heading1 }: Props) => {
  return (
    <>
      <Box
        sx={{ backgroundColor: "#B6E0CC" }}
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <Box
          display="flex"
          justifyContent="space-around"
          
        >
          <Box width="55%">
            <Typography variant="h1" color="black" fontWeight="500">
              {heading1}
            </Typography>
            <Box my="20px">
              <Typography variant="h5" color="black">
                An employee is someone who gets paid to work for a person or
                company. Workers don't need to work full time to be considered
                employees
              </Typography>
            </Box>
            <Box
              width="60%"
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              alignItems="space-between"
            >
              <CustomButton
                label="Get Started"
                bgColor="transparent"
                textColor="black"
                border="2px solid black"
                shadow="4"
                mx="0px 20px 0px 0px"
                
                fullWidth="true"
              />
              <CustomButton
                label="How it works"
                bgColor="black"
                textColor="white"
                border="2px solid black"
                shadow="4"
                
                fullWidth="true"
              />
            </Box>
          </Box>
          <Box width="30%" height="500px">
            <img
              src={image}
              alt="albert einstein with tongue sticking out"
              style={{ width: "100%", borderRadius: "45%" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
