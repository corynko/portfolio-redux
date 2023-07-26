import EKLogo from "../assets/images/EK_lettering_favicon_white_on_trans.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { animate, motion } from "framer-motion";

import LogoDrawMotion from "./logoFadeFromLine";

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
      <Link href="/">
        <LogoDrawMotion />
        {/* <Box
          component="img"
          sx={{
            height: 64,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-start",
            flexGrow: 0,
          }}
          alt="Ethan Kotel Logo"
          src={EKLogo}
        /> */}
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
      </motion.div>
    </>
  );
}
