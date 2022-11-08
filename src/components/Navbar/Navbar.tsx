import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";

import CustomButton from "../Button/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationServices } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { logout } from "../../store/features/UserSlice";

const pages = ["Home", "Find jobs", "Job Alerts", "Career Advice", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
interface Props {
  user:any;
}
const ResponsiveAppBar = ({user}:Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const user = useSelector((state: RootState) => state.user);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const NavigateLogout = () => {
    AuthenticationServices.signOutUser();
    dispatch(logout());
    
    
  };
  // if(!user.user){
  //   navigate('/', {replace:true});
  // }
  return (
    <AppBar
      sx={{ backgroundColor: "#B6E0CC", borderBottom: "1px solid black" }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 8,
              display: { xs: "none", md: "flex" },
              fontWeight: 500,
              letterSpacing: ".1rem",
              color: "black",
            }}
          >
            remote-now
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ mx: "8px" }}
              >
                <Typography
                  fontWeight="500"
                  color="black"
                  textTransform="capitalize"
                  my="2"
                  fontSize="18px"
                >
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexGrow: 0,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            width="25%"
          >
            <CustomButton
              label={user !== null ? "Logout" : "Login"}
              bgColor="transparent"
              textColor="black"
              borderLeft="1px solid black"
              handleOnClick={NavigateLogout}
              fullWidth="true"
            />
            <CustomButton
              label={user !== null ? (user && user?.user?.name) : "Try it Free"}
              bgColor="black"
              textColor="white"
              link="/user/profile"
              fullWidth="true"
            />
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
