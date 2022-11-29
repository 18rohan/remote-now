import { FC } from "react";
import Container from "@mui/material/Grid";
import { Box, GridProps } from "@mui/material";
import { Navbar } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Footer from "../../components/Footer";

const style = {
  container: {
    margin:'0px',
    padding:'0px 0px 0px 0px',
    
    bgcolor: {
      xs: "#E5E5E5",
    },
  },
};

interface Props {
  children?: any;
  backgroundColor?: string;
}
const HomePageContainer: FC<Props | GridProps> = ({ children, ...props }) => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <Container container sx={style.container} {...props}>
      <Navbar user={user} />
        {children}
      <Footer/>
    </Container>
  );
};

export default HomePageContainer;
