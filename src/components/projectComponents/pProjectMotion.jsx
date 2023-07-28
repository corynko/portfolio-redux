import { animate, delay, motion, stagger } from "framer-motion";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import CardProjectMotion from "./cardProjectMotion";
import H1ProjectDrawMotion from "./h1ProjectFadeFromLine";

function PHomeMotion() {
  //speeds up all animations on mobile
  let divTopVariants = {
    start: { opacity: 0, stroke: "#F5F5F5" },
    finished: {
      opacity: 1,
      fill: "#F5F5F5",
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 1.6,
      },
    },
  };

  let h3Variants = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 1.8,
      },
    },
  };

  let h4Variants = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 2,
      },
    },
  };

  return (
    <Box className="center homeImgBox" marginTop={"800px"} display={"flex"}>
      <motion.div
        variants={divTopVariants}
        initial={"start"}
        animate={"finished"}
      >
        <H1ProjectDrawMotion />
        <motion.h3 className="pageH3" variants={h3Variants}>
          Explore at your leisure.
        </motion.h3>
        <motion.h4 className="pageH4" variants={h4Variants}>
          <Link
            to="/contact"
            id="projectsContact"
            className="pageBodyText contactLink center"
          >
            contact me when you're ready
          </Link>
        </motion.h4>
        <CardProjectMotion />
        <div style={{ marginTop: "40px" }}></div>
      </motion.div>
    </Box>
  );
}

export default PHomeMotion;
