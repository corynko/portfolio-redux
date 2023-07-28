// non-animated imports
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import NavItemsMobile from "./navMobileMotionComponents/navItemsMobile";

//animated imports
import LeftCurlyMotion from "./navDeskMotionComponents/leftCurlyMotion";
import RightCurlyMotion from "./navDeskMotionComponents/rightCurlyMotion";
import LeftCurlyMotionFinal from "./navDeskMotionComponents/leftCurlyMotionFinal";
import RightCurlyMotionFinal from "./navDeskMotionComponents/rightCurlyMotionFinal";
import LetteringMotion from "./navDeskMotionComponents/letteringMotion";
import LogoFadeDesktop from "./navDeskMotionComponents/logoTextFragment";
import NavItemsDesktop from "./navDeskMotionComponents/navItemsDesktop";
import LogoFadeMobile from "./navMobileMotionComponents/logoFadeMobile";

//  TODO: fix opening/closing menus (commented out consts below)

function ResponsiveAppBar() {
  // const [anchorElNav, setAnchorElNav] =
  //   (React.useState < null) | (HTMLElement > null);

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  return (
    <AppBar position="static" className="appbar">
      <Toolbar className="toolbar" disableGutters>
        <Box
          sx={{
            width: 1,
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LeftCurlyMotionFinal />

          <LogoFadeDesktop />
          <LogoFadeMobile />

          <LeftCurlyMotion />

          <LetteringMotion />

          <RightCurlyMotion />

          <NavItemsDesktop />
          <NavItemsMobile />

          <RightCurlyMotionFinal />
        </Box>
      </Toolbar>
    </AppBar>
    /* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton> */
  );
}
export default ResponsiveAppBar;
