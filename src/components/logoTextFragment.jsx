import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { animate, motion } from "framer-motion";
import Box from "@mui/material/Box";

import LogoFadeFromLine from "./logoFadeFromLine";

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

export default function LogoText() {
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Link href="/">
          <LogoFadeFromLine />
        </Link>
        <motion.div variants={divVariants} initial="start" animate="finished">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 2,
              mr: 2,
              // display: { xs: "none", md: "flex" },
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
      </Box>
    </>
  );
}
