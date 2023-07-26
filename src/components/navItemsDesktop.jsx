import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { animate, motion } from "framer-motion";

const pages = ["who i am", "what i do", "contact me", "photos", "audio"];

const divVariants = {
  start: { opacity: 0 },
  finished: {
    opacity: 1,

    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 5,
    },
  },
};

export default function NavItemsDesktop() {
  return (
    <motion.div variants={divVariants} initial="start" animate="finished">
      <Box
        sx={{
          flexGrow: 1,
          display: { sm: "none", md: "flex" },
          //   flexWrap: "wrap",

          justifyContent: "space-between",
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
    </motion.div>
  );
}
