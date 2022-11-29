import React, { FC } from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Grid";
import { GridProps } from "@mui/material";

const style = {
  container: {
    bgcolor: {
      xs: "#E5E5E5",
    },
    padding:"120px 0px 50px 0px"
    
  },
};

interface Props {
  children?: any,

}
const Section: FC<Props | GridProps> = ({ children, ...props }) => {
  return (
    <Container container sx={style.container} {...props}>
      {children}
    </Container>
  );
};

export default Section;
