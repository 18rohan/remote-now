import {FC} from 'react';
import { GridProps } from "@mui/material";
import { Box } from "@mui/material";

const style = {
  container: {
    bgcolor: {
      xs: "transparent",
    },
    // margin:"12px 0px 30px 0px"
  },
};

interface Props {
  children?: any;
  backgroundColor?: string;
  ContainerWidth?:string;
}
const CenterBox: FC<Props | GridProps> = ({ children,ContainerWidth, ...props }:Props) => {
  return (
    <Box display="flex" justifyContent="center" width={ContainerWidth} alignItems="center" sx={style.container} {...props}>
      {children}
    </Box>
  );
};

export default CenterBox;
