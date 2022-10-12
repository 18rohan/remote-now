import React from 'react'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
    link?:string;
    
}
const CustomButton = ({label, mx , bgColor, textColor,borderLeft,border, shadow, link,handleOnClick}:Props) => {
  if(link){
    return(<Link to={`${link}`} style={{width:'100%',textDecoration:"none",backgroundColor:`${bgColor}`, padding:'20px',borderRadius:'0px', border:`${border}`, borderLeft:`${borderLeft}`, boxShadow:`${shadow}`, margin:`${mx}`}}>
    <Button onClick={handleOnClick}   fullWidth >
        <Typography fontWeight="bold" textTransform="capitalize" color={`${textColor}`}>{label}</Typography>
    </Button>
    </Link>)
  }
  else {
  return (
    
    
    <Button onClick={handleOnClick} sx={{backgroundColor:`${bgColor}`, padding:'20px',borderRadius:'0px', border:`${border}`, borderLeft:`${borderLeft}`, boxShadow:`${shadow}`, margin:`${mx}` }}  fullWidth >
        <Typography fontWeight="bold" textTransform="capitalize" color={`${textColor}`}>{label}</Typography>
    </Button>
    
  )
  }
}

export default CustomButton