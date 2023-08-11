import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";

import LogoFadeFromLine from "./logoFadeFromLine";

export default function LogoText() {
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
    <>
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/">
          <LogoFadeFromLine />
        </Link>
        <Link to="/" className="logoTextLink">
          <motion.div variants={divVariants} initial="start" animate="finished">
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                ml: 2,
                mr: 2,

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
          </motion.div>
        </Link>
      </Box>
    </>
  );
}
