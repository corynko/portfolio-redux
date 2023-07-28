import React from "react";
import { animate, delay, motion } from "framer-motion";

function H1HomeDrawMotion() {
  //speeds up animation on mobile
  let h1Variants = {
    start: { opacity: 0, stroke: "#F5F5F5" },
    finished: {
      opacity: 1,
      fill: "#F5F5F5",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 5.2,
      },
    },
  };

  const isMobile = window.innerWidth < 1080;
  if (isMobile) {
    h1Variants = {
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
  }

  const isMedium = window.innerWidth < 1500;
  if (isMedium) {
    h1Variants = {
      start: { opacity: 0 },
      finished: {
        opacity: 1,

        transition: {
          duration: 1,
          ease: "easeInOut",
          delay: 1.4,
        },
      },
    };
  }

  return (
    <div className="center">
      {/* DENVER */}
      <motion.h1
        variants={h1Variants}
        initial={"start"}
        animate={"finished"}
        className="pageH1"
      >
        GIVE ME A SHOUT
      </motion.h1>
    </div>
  );
}

export default H1HomeDrawMotion;
