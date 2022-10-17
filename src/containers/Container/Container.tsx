import React, { FC } from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Grid";
import { GridProps } from "@mui/material";
import { Navbar } from "../../components";

interface Props {
  children?: any,
  backgroundColor:string

}
const ColumnContainer: FC<Props | GridProps> = ({ children, ...props }) => {

const style = {
    container: {
      display:'flex',
      flexDirection:'column',
      width:'100%',
      
      
      // margin:"40px 0px 30px 0px"
      
    },
  };
  
  return (
    <Container container sx={style.container} {...props}>
        {/* <Navbar/> */}
      {children}
    </Container>
  );
};

export default ColumnContainer;
