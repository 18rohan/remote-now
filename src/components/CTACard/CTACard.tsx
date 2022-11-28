import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
interface Props {
  title: string;
  subheading: string;
  backgroundColor: string;
  border: string;
  color:string;
}
const CTACard = ({ title, subheading, backgroundColor, border, color }: Props) => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" padding="12px" sx={{ backgroundColor: `${backgroundColor}`, border: `${border}`, boxShadow:"5px 10px black" }} width="300px"  >
      <Box width="100%" marginBottom="12px">
        <Typography variant="h4" fontWeight="bold" color={`${color}`}>{title}</Typography>
      </Box>
      <Box width="100%" display="flex" justifyContent="space-around" flexDirection="row">
        <Typography variant="h6"fontWeight="500" color={`${color}`}>{subheading}</Typography>
      </Box>
    </Box>
  );
};

export default CTACard;
