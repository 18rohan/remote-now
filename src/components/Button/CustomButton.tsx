import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  label: string;
  border?: string;
  borderLeft?: string;
  bgColor: string;
  textColor: string;
  shadow?: string;
  mx?: string;
  handleOnClick?: (data:any) => void;
  
  link?: string;
  fullWidth?: string;
  width?: string;
}
const CustomButton = ({
  label,
  mx,
  bgColor,
  width,
  textColor,
  borderLeft,
  border,
  shadow,
  link,
  handleOnClick,
  fullWidth,
  
}: Props) => {
  if (link) {
    return (
      <Link
        to={`${link}`}
        style={{
          width: "100%",
          textDecoration: "none",
          backgroundColor: `${bgColor}`,
          padding: "20px",
          borderRadius: "0px",
          border: `${border}`,
          borderLeft: `${borderLeft}`,
          boxShadow: `${shadow}`,
          margin: `${mx}`,
          
        }}
      >
        <Button onClick={handleOnClick} fullWidth={fullWidth ? true : false}>
          <Typography
            fontWeight="bold"
            textTransform="capitalize"
            color={`${textColor}`}
          >
            {label}
          </Typography>
        </Button>
      </Link>
    );
  } else {
    // console.log("Handle Click: ",handleOnClick)
    return (
      <Button
        onClick={handleOnClick}
        
        sx={{
          width: `${width}`,
          backgroundColor: `${bgColor}`,
          padding: "20px",
          borderRadius: "0px",
          border: `${border}`,
          borderLeft: `${borderLeft}`,
          boxShadow: `${shadow}`,
          margin: `${mx}`,
        }}
        fullWidth={fullWidth ? true : false}
      >
        <Typography
          fontWeight="bold"
          textTransform="capitalize"
          color={`${textColor}`}
        >
          {label}
        </Typography>
      </Button>
    );
  }
};

export default CustomButton;
