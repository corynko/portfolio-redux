import React from "react";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

const pages = ["who i am", "what i do", "contact me", "photography", "audio"];

export default function NavItems() {
  return (
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
            <Typography textAlign="center" sx={{ fontFamily: "Montserrat" }}>
              {page}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
