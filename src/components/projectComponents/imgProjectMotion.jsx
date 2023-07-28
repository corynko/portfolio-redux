import React from "react";
import { animate, delay, motion } from "framer-motion";
import homeImg from "../../assets/images/EKP_EGATM-28.jpg";

function ImgHomeMotion() {
  //speeds up animation on mobile
  let imgVariants = {
    start: { opacity: 0, stroke: "#F5F5F5", borderRadius: "100%" },
    finished: {
      opacity: 1,
      fill: "#F5F5F5",
      borderRadius: ["100%", "40%", "30%", "20%", 0],
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2,

        borderRadius: {
          duration: 0.4,
          ease: "linear",
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
      className="center projectCoverImg"
      variants={imgVariants}
      initial="start"
      animate="finished"
    />
  );
}

export default ImgHomeMotion;
