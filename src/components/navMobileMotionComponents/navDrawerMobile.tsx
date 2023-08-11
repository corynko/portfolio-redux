import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function NavDrawerMobile() {
  const [openDrawer, setOpenDrawer] = useState(false);

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

      if (!open) {
        setOpenDrawer(false);
      } else {
        setOpenDrawer(true);
      }
    };

  const list = (
    <Box sx={{ flexDirection: "column" }} role="presentation">
      <Link to="/" className="mobileLink">
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
          fullWidth={true}
        >
          WHO I AM
        </Button>
      </Link>

      <Link to="/projects" className="mobileLink">
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
          fullWidth={true}
        >
          WHAT I DO
        </Button>
      </Link>

      <Link to="/contact" className="mobileLink">
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
          fullWidth={true}
        >
          CONTACT ME
        </Button>
      </Link>
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
        onClick={(event) => {
          event.stopPropagation();
        }}
        anchor="right"
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
