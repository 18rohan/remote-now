import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#B6E0CC",
    },
    secondary: {
      main: green[500],
    },
  },
});

theme.typography.h1 = {
    fontSize: "75px",
    lineHeight: "70px",
    fontWeight: "500",
  "@media (max-width:600px)": {
    fontSize: "3rem",
    lineHeight: "55px",
  },
  
};
theme.typography.h5 = {
  fontSize: "25px",
  lineHeight: "50px",
  fontWeight: "300",
  "@media(max-width:600px)": {
    fontSize: "15px",
    lineHeight: "35px",
    fontWeight: "300",
  },
  
};

theme.typography.h6 = {
    fontSize: "18px",
    lineHeight: "50px",
    fontWeight: "300",
    "@media(max-width:600px)": {
      fontSize: "14px",
      lineHeight: "35px",
      fontWeight: "300",
    },
    
  };
  