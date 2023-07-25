import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

//SVG imports
import EKLogo from "../assets/images/EK_lettering_favicon_white_on_trans.svg";
import blankProf from "../assets/images/blankprof.svg";

//animation imports
import LeftCurlyMotion from "./leftCurlyMotion";
import RightCurlyMotion from "./rightCurlyMotion";
import LeftCurlyMotionFinal from "./leftCurlyMotionFinal";
import RightCurlyMotionFinal from "./rightCurlyMotionFinal";
import LetteringMotion from "./letteringMotion";

const pages = ["who i am", "what i do", "contact me", "photography", "audio"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

//  TODO: fix opening/closing menus (commented out consts below)

function ResponsiveAppBar() {
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
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <LeftCurlyMotionFinal />
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Link href="/">
            <Box
              component="img"
              sx={{
                height: 64,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-start",
                flexGrow: 0,
              }}
              alt="Ethan Kotel Logo"
              src={EKLogo}
            />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 2,
              mr: 2,
              display: { xs: "none", sm: "flex" },
              fontFamily: "montserrat",
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              justifyContent: "flex-start",
            }}
          >
            ETHAN KOTEL
          </Typography>
          <LeftCurlyMotion />
          <LetteringMotion
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          />
          <RightCurlyMotion />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              // anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              // open={Boolean(anchorElNav)}
              // onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography
                    textAlign="center"
                    sx={{ fontFamily: "Montserrat" }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Link href="/">
            <Box
              component="img"
              sx={{
                height: 64,
                display: { xs: "flex", md: "none" },
              }}
              alt="Ethan Kotel Logo"
              src={EKLogo}
            />
          </Link>
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
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{
                  my: 4,
                  color: "white",
                  display: "block",
                  fontFamily: "Raleway",
                  fontWeight: 300,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
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
            </Tooltip>
            <Menu
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
              // open={Boolean(anchorElUser)}
              // onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <RightCurlyMotionFinal />
        </Toolbar>
        {/* </Box> */}
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
