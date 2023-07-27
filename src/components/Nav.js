// non-animated imports
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import NavItemsMobile from "./navItemsMobile";

//animated imports
import LeftCurlyMotion from "./leftCurlyMotion";
import RightCurlyMotion from "./rightCurlyMotion";
import LeftCurlyMotionFinal from "./leftCurlyMotionFinal";
import RightCurlyMotionFinal from "./rightCurlyMotionFinal";
import LetteringMotion from "./letteringMotion";
import LogoText from "./logoTextFragment";
import NavItemsDesktop from "./navItemsDesktop";
import LogoFadeMobile from "./logoFadeMobile";

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
    <AppBar position="static">
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

          <LogoText />
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
