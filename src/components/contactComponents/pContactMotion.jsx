import { animate, delay, motion, stagger } from "framer-motion";
import Box from "@mui/material/Box";

function PContactMotion() {
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

  let linkVariants = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 2.2,
      },
    },
  };
  let linkVariants2 = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 2.5,
      },
    },
  };
  let linkVariants3 = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 2.8,
      },
    },
  };
  let linkVariants4 = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 3.1,
      },
    },
  };
  let linkVariants5 = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 3.4,
      },
    },
  };

  return (
    <Box className="center homeImgBox" display={"flex"}>
      <motion.div
        variants={divTopVariants}
        initial={"start"}
        animate={"finished"}
      >
        <motion.h3 className="pageH3" variants={h3Variants}>
          I'm looking forward to working with you.
        </motion.h3>
        <motion.h4 className="contactH4" variants={h4Variants}>
          connect with me at the links below, or submit a form and I will reach
          out as soon as I can.
        </motion.h4>
        <div className="divWrapper">
          <div className="linksDiv">
            <motion.a
              variants={linkVariants}
              initial="start"
              animate="finished"
              className="pageBodyText contactLink"
              href="https://github.com/corynko"
              target="_blank"
            >
              GitHub
            </motion.a>
            <motion.a
              variants={linkVariants2}
              initial="start"
              animate="finished"
              className="pageBodyText contactLink"
              href="https://www.linkedin.com/in/ethankotel/"
              target="_blank"
            >
              LinkedIn
            </motion.a>
            <motion.a
              variants={linkVariants3}
              initial="start"
              animate="finished"
              className="pageBodyText contactLink"
              href="https://u.pcloud.link/publink/show?code=XZC8iAVZfQ49iYgLe28WCvkJ2C0znLO6fMRk"
              target="_blank"
            >
              Résumé
            </motion.a>
          </div>
          <div className="linksDiv">
            <motion.a
              variants={linkVariants4}
              initial="start"
              animate="finished"
              className="pageBodyText contactLink"
              href="tel:+13039567556"
            >
              Phone
            </motion.a>
            <motion.a
              variants={linkVariants5}
              initial="start"
              animate="finished"
              className="pageBodyText contactLink"
              href="mailto: info@ethankotel.com"
              target="_blank"
            >
              Email
            </motion.a>
          </div>
        </div>
        <div style={{ marginTop: "40px" }}></div>
      </motion.div>
    </Box>
  );
}

export default PContactMotion;
