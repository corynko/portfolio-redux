import MenuIcon from "@mui/icons-material/Menu";
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
        href="https://ethankotel.dev/"
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
        href="https://ethankotel.dev/projects"
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
        href="https://ethankotel.dev/contact"
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
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon className="menuIcon" />
      </Button>

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
      </SwipeableDrawer>
    </div>
  );
}

export default NavDrawerMobile;
