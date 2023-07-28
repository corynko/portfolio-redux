import IconButton from "@mui/material/IconButton";

import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItem from "@mui/material/ListItem";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Button";
import React, { useState } from "react";

function NavDrawerMobile() {
  const [openDrawer, setOpenDrawer] = useState<boolean | false>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      } else if (
        event &&
        event.type === "keydown" &&
        (event as React.KeyboardEvent).key === "Esc"
      ) {
        setOpenDrawer(false);
      }

      setOpenDrawer(true);
      {
        return;
      }
    };

  const list = (
    <Box
      sx={{ flexDirection: "column" }}
      role="presentation"
      onClick={toggleDrawer(true)}
      onKeyDown={toggleDrawer(true)}
    >
      <Button
        onClick={() => setOpenDrawer(false)}
        sx={{
          color: "#F5F5F5",
          display: "flex",
          fontFamily: "Raleway",
          marginX: "1rem",
          marginY: 1,
          fontWeight: 300,
          maxHeight: "100px",
          flexGrow: 1,
          borderRadius: "20%",
        }}
        href="/"
        fullWidth={true}
      >
        WHO I AM
      </Button>

      <Button
        onClick={() => setOpenDrawer(false)}
        sx={{
          color: "#F5F5F5",
          display: "flex",
          fontFamily: "Raleway",
          marginX: "1rem",
          marginY: 1,
          fontWeight: 300,
          maxHeight: "100px",
          flexGrow: 1,
          borderRadius: "20%",
        }}
        href="/portfolio"
        fullWidth={true}
      >
        WHAT I DO
      </Button>

      <Button
        onClick={() => setOpenDrawer(false)}
        sx={{
          color: "#F5F5F5",
          display: "flex",
          fontFamily: "Raleway",
          marginX: "1rem",
          marginY: 1,
          fontWeight: 300,
          maxHeight: "100px",
          flexGrow: 1,
          borderRadius: "20%",
        }}
        href="/contact"
        fullWidth={true}
      >
        CONTACT ME
      </Button>

      <Button
        onClick={() => setOpenDrawer(false)}
        sx={{
          color: "#F5F5F5",
          display: "flex",
          fontFamily: "Raleway",
          marginX: "1rem",
          marginY: 1,
          fontWeight: 300,
          maxHeight: "100px",
          flexGrow: 1,
          borderRadius: "20%",
        }}
        href="https://ethankotel.photos"
        fullWidth={true}
      >
        PHOTOS
      </Button>

      <Button
        onClick={() => setOpenDrawer(false)}
        sx={{
          color: "#F5F5F5",
          display: "flex",
          fontFamily: "Raleway",
          marginX: "1rem",
          marginY: 1,
          fontWeight: 300,
          maxHeight: "100px",
          flexGrow: 1,
          borderRadius: "20%",
        }}
        href="https://www.ethankotel.com/"
        fullWidth={true}
      >
        AUDIO
      </Button>
    </Box>
  );

  return (
    // <IconButton
    //   size="large"
    //   aria-label="account of current user"
    //   aria-controls="menu-appbar"
    //   aria-haspopup="true"
    //   onClick={toggleDrawer}
    //   color="inherit"
    // >
    <div>
      <MenuIcon />
      <React.Fragment>
        <Button onClick={toggleDrawer(true)}></Button>
        <SwipeableDrawer
          open={openDrawer}
          onOpen={toggleDrawer(true)}
          onClose={toggleDrawer(false)}
          anchor="right"
          // variant="temporary"
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
          }}
        >
          {list}
          {/* anchor="right"
      variant="temporary"
      open={open}
      onClose={setOpenDrawer(false)}
      onOpen={setOpenDrawer(true)} */}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default NavDrawerMobile;
