// import Box from "@mui/material/Box";
// import Link from "@mui/material/Link";

// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
// import Grid from "@mui/material/Grid";

// non-animated imports
import Toolbar from "@mui/material/Toolbar";
import ToolbarGroup from "@mui/material/Toolbar";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import NavItemsMobile from "./navItemsMobile";

//SVG imports
// import blankProf from "../assets/images/blankprof.svg";

//animated imports
import LeftCurlyMotion from "./leftCurlyMotion";
import RightCurlyMotion from "./rightCurlyMotion";
import LeftCurlyMotionFinal from "./leftCurlyMotionFinal";
import RightCurlyMotionFinal from "./rightCurlyMotionFinal";
import LetteringMotion from "./letteringMotion";
import LogoText from "./logoTextFragment";
import NavItemsDesktop from "./navItemsDesktop";
// const pages = ["who i am", "what i do", "contact me", "photography", "audio"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

//  TODO: fix opening/closing menus (commented out consts below)

function ResponsiveAppBar() {
  const [show, setShow] = useState(false);
  setTimeout(() => setShow(true), 100);
  // const [anchorElNav, setAnchorElNav] =
  //   (React.useState < null) | (HTMLElement > null);
  // const [anchorElUser, setAnchorElUser] =
  //   (React.useState < null) | (HTMLElement > null);

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="static">
      <Toolbar className="toolbar" disableGutters>
        <LeftCurlyMotionFinal />
        {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton> */}

        {show && <LogoText />}
        <LeftCurlyMotion />

        <LetteringMotion />

        <RightCurlyMotion />

        {show && <NavItemsDesktop />}

        <RightCurlyMotionFinal />

        {/* <Link href="/">
            <Box
              component="img"
              sx={{
                height: 64,
                display: { xs: "flex", md: "none" },
              }}
              alt="Ethan Kotel Logo"
              src={EKLogo}
            />
          </Link> */}
        {/* TODO: add lettering that disappears after coming out of curlys on mobile */}
        {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontFamily: "montserrat",
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ETHAN KOTEL
          </Typography> */}

        {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings"> */}
        {/* <IconButton sx={{ p: 0 }}>
                <Box
                  component="img"
                  sx={{
                    height: 64,
                    display: { xs: "none", md: "flex" },
                    flexGrow: 0,
                    alignContent: "end",
                  }}
                  alt="New User Avatar"
                  src={blankProf}
                /> */}
        {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
        {/* </IconButton> */}
        {/* </Tooltip> */}
        {/* <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                // anchorEl={anchorElUser}
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
              > */}
        {/* {settings.map((setting) => (
                  <MenuItem key={setting}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
      </Toolbar>

      {/* </Box> */}
    </AppBar>
  );
}
export default ResponsiveAppBar;
