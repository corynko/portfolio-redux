import React from "react";
import { animate, delay, motion } from "framer-motion";
import { Margin } from "@mui/icons-material";

function LogoFadeFromLine() {
  let pathVariants = {
    start: { opacity: 0, pathLength: 0, fill: "#00000000" },
    finished: {
      opacity: 1,
      pathLength: 1,
      fill: "#F5F5F5",

      transition: {
        duration: 1.3,
        ease: "easeOut",
        delay: 3,
        fill: {
          duration: 1,
          ease: "easeInOut",
          delay: 5,
        },
      },
    },
  };

  const isMobile = window.innerWidth < 1500;
  if (isMobile) {
    pathVariants = {
      start: { opacity: 0, pathLength: 0, fill: "#00000000" },
      finished: {
        opacity: 1,
        pathLength: 1,
        fill: "#F5F5F5",

        transition: {
          duration: 1.3,
          ease: "easeOut",

          fill: {
            duration: 1,
            ease: "easeInOut",
            delay: 1.5,
          },
        },
      },
    };
  }

  return (
    <div style={{ margin: "10px" }}>
      <motion.svg
        version="1.0"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="90px"
        height="90px"
        viewBox="0 0 90 90"
        initial="start"
        animate="finished"
        display={{ xs: "none", md: "flex" }}
      >
        <motion.polygon
          stroke="#F5F5F5"
          fill={"none"}
          points="4.1,39.1 34.4,39.1 34.4,14.5 2.4,14.5 2.4,6.1 44.4,6.1 
	44.4,83.9 0.6,83.9 0.6,75.5 34.4,75.5 34.4,47.4 4.1,47.4 "
          variants={pathVariants}
        />

        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={"none"}
          stroke="#F5F5F5"
          d="M34.4,6.1h10v37.5h0.3c2.1-3,4.2-5.8,6.1-8.3L74.7,6.1h12.5L59,39.1
	l30.4,44.8H77.5L51.8,45.7l-7.4,8.5v29.7h-10V6.1z"
          variants={pathVariants}
        />
      </motion.svg>
    </div>
  );
}

export default LogoFadeFromLine;
