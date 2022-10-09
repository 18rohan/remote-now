import React from 'react'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material';

interface Props {
    label:string;
    border?:string;
    borderLeft?:string;
    bgColor:string;
    textColor:string;
    shadow?:string;
    mx?:string;
    handleOnClick?:()=>void;
    type:string;
    
}
const CustomButton = ({label, mx , bgColor, textColor,borderLeft,border, shadow, handleOnClick}:Props) => {
  return (
    <Button onClick={handleOnClick} sx={{backgroundColor:`${bgColor}`, padding:'20px',borderRadius:'0px', border:`${border}`, borderLeft:`${borderLeft}`, boxShadow:`${shadow}`, margin:`${mx}` }}  fullWidth >
        <Typography fontWeight="bold" textTransform="capitalize" color={`${textColor}`}>{label}</Typography>
    </Button>
  )
}

export default CustomButton