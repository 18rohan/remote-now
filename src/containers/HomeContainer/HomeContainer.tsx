import React, { FC } from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Grid";
import { GridProps } from "@mui/material";
import { Navbar } from "../../components";
const style = {
  container: {
    bgcolor: {
      xs: "#E5E5E5",
    },
    // margin:"12px 0px 30px 0px"
    
  },
};

interface Props {
  children?: any,

}
const HomeContainer: FC<Props | GridProps> = ({ children, ...props }) => {
  return (
    <Container container sx={style.container} {...props}>
        <Navbar />
      {children}
    </Container>
  );
};

export default HomeContainer;
