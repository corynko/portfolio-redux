import React from "react";
import { animate, delay, motion } from "framer-motion";

function ImgHomeMotion() {
  //speeds up animation on mobile
  let imgVariants = {
    start: { opacity: 0, stroke: "#F5F5F5", borderRadius: "100%" },
    finished: {
      opacity: 1,
      fill: "#F5F5F5",
      borderRadius: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 4.5,

        borderRadius: {
          delay: 3.8,
          duration: 2,
        },
      },
    },
  };

  const isMobile = window.innerWidth < 1500;
  if (isMobile) {
    imgVariants = {
      start: { opacity: 0 },
      finished: {
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeOut",
          delay: 1.2,
        },
      },
    };
  }

  return (
    <motion.div
      className="center homeCoverImg"
      variants={imgVariants}
      initial="start"
      animate="finished"
    ></motion.div>
  );
}

export default ImgHomeMotion;
