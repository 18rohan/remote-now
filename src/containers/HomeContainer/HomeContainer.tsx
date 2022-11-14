import React, { FC } from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Grid";
import { GridProps } from "@mui/material";
import { Navbar } from "../../components";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const style = {
  container: {
    bgcolor: {
      xs: "#E5E5E5",
    },
    // margin:"12px 0px 30px 0px"
    
  },
};

interface Props {
  children?: any;
  backgroundColor?:string;

}
const HomeContainer: FC<Props | GridProps> = ({ children, ...props }) => {
  const user = useSelector((state:RootState ) => state.user.user);
  return (
    <Container container sx={style.container} {...props}>
        <Navbar user={user}/>
      {children}
      {/* <Footer/> */}
    </Container>
  );
};

export default HomeContainer;
