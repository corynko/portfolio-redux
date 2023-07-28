import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { animate, motion } from "framer-motion";

export default function NavItemsDesktop() {
  let divVariants = {
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
  const isMobile = window.innerWidth < 1500;
  if (isMobile) {
    divVariants = {
      start: { opacity: 0 },
      finished: {
        opacity: 1,

        transition: {
          duration: 1,
          ease: "easeInOut",
          delay: 1,
        },
      },
    };
  }

  return (
    <motion.div variants={divVariants} initial="start" animate="finished">
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          textAlign: "center",
        }}
      >
        <Button
          sx={{
            color: "#F5F5F5",
            display: "flex",
            fontFamily: "Raleway",
            marginX: "1rem",
            fontWeight: 300,
            maxHeight: "100px",
            whiteSpace: "nowrap",
            flexGrow: 1,
            borderRadius: "20%",
          }}
          href="/"
          fullWidth={true}
        >
          WHO I AM
        </Button>
        <Button
          sx={{
            color: "#F5F5F5",
            display: "flex",
            fontFamily: "Raleway",
            marginX: "1rem",
            fontWeight: 300,
            maxHeight: "100px",
            whiteSpace: "nowrap",
            flexGrow: 1,
            borderRadius: "20%",
          }}
          href="/portfolio"
          fullWidth={true}
        >
          WHAT I DO
        </Button>
        <Button
          sx={{
            color: "#F5F5F5",
            display: "flex",
            fontFamily: "Raleway",
            marginX: "1rem",
            fontWeight: 300,
            maxHeight: "100px",
            whiteSpace: "nowrap",
            flexGrow: 1,
            borderRadius: "20%",
          }}
          href="/contact"
          fullWidth={true}
        >
          CONTACT ME
        </Button>
        <Button
          sx={{
            color: "#F5F5F5",
            display: "flex",
            fontFamily: "Raleway",
            marginX: "1rem",
            fontWeight: 300,
            maxHeight: "100px",
            whiteSpace: "nowrap",
            flexGrow: 1,
            borderRadius: "20%",
          }}
          href="https://ethankotel.photos"
          fullWidth={true}
        >
          PHOTOS
        </Button>
        <Button
          sx={{
            color: "#F5F5F5",
            display: "flex",
            fontFamily: "Raleway",
            fontWeight: 300,
            maxHeight: "100px",
            whiteSpace: "nowrap",
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
