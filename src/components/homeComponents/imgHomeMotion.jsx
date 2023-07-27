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

  const isMobile = window.innerWidth < 1080;
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
    <div className="center">
      {/* DENVER */}
      <motion.img
        src={homeImg}
        alt="Evergroove Studio as shot by Ethan Kotel"
        className="coverImg"
        variants={imgVariants}
        initial={"start"}
        animate={"finished"}
      ></motion.img>
    </div>
  );
}

export default ImgHomeMotion;
