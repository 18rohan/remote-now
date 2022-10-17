import React, { FC } from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Grid";
import { GridProps } from "@mui/material";
import { Navbar } from "../../components";
import Footer from "../../components/Footer";

interface Props {
  children?: any,
  backgroundColor:string

}
const GenericContainer: FC<Props | GridProps> = ({ children, ...props }) => {

const style = {
    container: {
      display:'flex',
      flexDirection:'column',
      width:'100%',
      margin:'0px'
      
      // margin:"40px 0px 30px 0px"
      
    },
  };
  
  return (
    <>
    <Container container sx={style.container} {...props}>
        {/* <Navbar/> */}
      {children}
      
    </Container>
    <Footer/>
    </>
  );
};

export default GenericContainer;
