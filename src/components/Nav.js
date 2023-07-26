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
            // border: "6px solid white",
          }}
        >
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

          <LogoText />
          <LeftCurlyMotion />

          <LetteringMotion />

          <RightCurlyMotion />

          <NavItemsDesktop />

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
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
