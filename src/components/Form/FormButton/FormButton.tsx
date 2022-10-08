import { Button, Typography } from '@mui/material'
import React from 'react'

interface Props {
    bgColor:string;
    label:string;
    TextWeight?:string;
    textColor?:string;
    onClick?:()=>void;
    uppercase?:boolean;
    fullWidth?:boolean;
    borderRadius?:string;
    type:'button' | 'reset' | 'submit';
    restProps:any;
    
}
const FormButton = ({bgColor, label, TextWeight, textColor, onClick, ...restProps}: Props) => {
  return (
    <Button fullWidth={!!restProps.fullWidth} type={restProps.type}  sx={{backgroundColor:`${bgColor}`, borderRadius:`${restProps.borderRadius ? restProps.borderRadius : '0px'}`}}>
        <Typography textTransform={`${restProps.uppercase ? 'uppercase' : 'capitalize'}`} fontWeight={`${TextWeight ? TextWeight : '500'}` } color={`${textColor ? textColor : 'black'}`} >{label}</Typography>
    </Button>
  )
}

export default FormButton