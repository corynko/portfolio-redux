// import React from "react";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import Box from "@mui/material/Box";
// import MenuItem from "@mui/material/MenuItem";

// const pages = ["who i am", "what i do", "contact me", "photography", "audio"];

// export default function NavItems() {
//   return (
//     <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//       <Menu
//         id="menu-appbar"
//         // anchorEl={anchorElNav}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "left",
//         }}
//         keepMounted
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "left",
//         }}
//         // open={Boolean(anchorElNav)}
//         // onClose={handleCloseNavMenu}
//         sx={{
//           display: { xs: "block", md: "none" },
//         }}
//       >
//         {pages.map((page) => (
//           <MenuItem key={page}>
//             <Typography textAlign="center" sx={{ fontFamily: "Montserrat" }}>
//               {page}
//             </Typography>
//           </MenuItem>
//         ))}
//       </Menu>
//     </Box>
//   );
// }

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { animate, motion } from "framer-motion";

// const pages = ["who i am", "what i do", "contact me", "photos", "audio"];

const divVariants = {
  start: { opacity: 0 },
  finished: {
    opacity: 1,

    transition: {
      duration: 0.75,
      ease: "easeInOut",
      delay: 1.5,
    },
  },
};

export default function NavItemsDesktop() {
  return (
    <motion.div variants={divVariants} initial="start" animate="finished">
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        {/* {pages.map((page) => ( */}
        <Button
          //   key={page}
          // onClick={handleCloseNavMenu}
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
          {/* {page} */}
          WHO I AM
        </Button>
        <Button
          //   key={page}
          // onClick={handleCloseNavMenu}
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
          //   key={page}
          // onClick={handleCloseNavMenu}
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
          //   key={page}
          // onClick={handleCloseNavMenu}
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
          //   key={page}
          // onClick={handleCloseNavMenu}
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
    </motion.div>
  );
}
