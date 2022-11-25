import { FC } from "react";
import Container from "@mui/material/Grid";
import { Box, GridProps } from "@mui/material";
import { Navbar } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const style = {
  container: {
    bgcolor: {
      xs: "#E5E5E5",
      margin:"0px",
      display:'flex',
      flexDirection:'column'
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
        <Box display="flex" flexDirection="column" maxHeight="100vh">
        {children}
        </Box>
      {/* <Footer/> */}
    </Container>
  );
};

export default HomePageContainer;
