import React from "react";
import { animate, delay, motion } from "framer-motion";
import Box from "@mui/material/Box";

function PHomeMotion() {
  //hides animation on mobile
  let pVariants = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 5.4,
        staggerChildren: 0.5,
      },
    },
  };

  const isMobile = window.innerWidth < 1080;
  if (isMobile) {
    pVariants = {
      start: { opacity: 0, stroke: "#F5F5F5" },
      finished: {
        opacity: 1,
        fill: "#F5F5F5",
        transition: {
          duration: 1,
          ease: "easeInOut",
          delay: 1.6,
          staggerChildren: 0.5,
        },
      },
    };
  }

  return (
    <Box className="center" display={"flex"}>
      <motion.div variants={pVariants} initial={"start"} animate={"finished"}>
        <h3 className="pageH3">Hi, my name is Ethan Kotel. </h3>
        <h4 className="pageH4">
          I am a Denver, Colorado-based developer, musician, and photographer.
        </h4>
        <p className="pageBodyText">
          My aim at all times is to refresh stale workflows using an outsider's
          perspective, without sacrificing form
          <span className="bold"> nor </span>
          functionality. Since starting my journey in full-stack web
          development, I have made it a point to blend my keen eye for design
          with my strong background in marketing, in order to deliver both
          <span className="bold"> highly practical </span>and
          <span className="bold"> highly attractive </span>solutions for any
          industry.
        </p>
        <div style={{ marginTop: "40px" }}></div>
        <p className="pageBodyText">
          I pride myself on being an extremely
          <span className="bold"> efficient </span>and
          <span className="bold"> adventurous </span>self-starter. I don't
          believe in doing things the same way simply because "that's how it's
          always been done," and am always looking for the next opportunity to
          <span className="bold"> innovate routine workflows </span>with the
          experience I've gained from working in numerous, widely varied
          industries.
        </p>
      </motion.div>
    </Box>
  );
}

export default PHomeMotion;
