import React from "react";
import { animate, motion } from "framer-motion";

const svgVariants = {
  start: {},
  finished: {
    rotate: 0,

    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  start: { opacity: 0.5, pathLength: 0 },
  finished: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1.1,
      ease: "easeOut",
      delay: 1,
    },
  },
};
const pathVariantsDel2 = {
  start: { opacity: 0.5, pathLength: 0 },
  finished: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 1.35,
    },
  },
};
const pathVariantsDel3 = {
  start: { opacity: 0.5, pathLength: 0 },
  finished: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 1.65,
    },
  },
};

const divVariantsLeft = {
  start: { x: "50%" },
  finished: {
    x: "0%",
    opacity: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 2,
    },
  },
};
const divVariantsRight = {
  start: { x: "50%" },
  finished: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 2,
    },
  },
};

function LetteringMotion() {
  //hides animation on mobile
  let mobileCheckDiv = {
    start: { display: "none" },
    finished: { display: "none" },
  };
  const isMobile = window.innerWidth < 1080;
  if (!isMobile) {
    mobileCheckDiv = {
      start: { x: "-20%", opacity: 0 },
      finished: {
        x: "-40%",
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeIn",
          delay: 2.5,
        },
      },
    };
  }

  return (
    <motion.div variants={mobileCheckDiv} initial="start" animate="finished">
      {/* < */}
      {/* <motion.svg
        width="40"
        height="40"
        fill="transparent"
        stroke="#f5f5f5"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="start"
        animate="finished"
      >
        <motion.path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width={0.5}
          d="M 16.8 28 L 0 28 L 0 0 L 16.8 0 L 16.8 3.28 L 3.8 3.28 L 3.8 11.8 L 15 11.8 L 15 15 L 3.8 15 L 3.8 24.72 L 16.8 24.72 L 16.8 28 Z"
          variants={pathVariants}
        />
      </motion.svg> */}
      <motion.div
        variants={divVariantsLeft}
        initial="start"
        animate="finished"
        style={{ marginTop: 20, flexGrow: 1 }}
      >
        {/* E */}
        <motion.svg
          width="30"
          height="30"
          fill="transparent"
          stroke="#f5f5f5"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="start"
          animate="finished"
        >
          <motion.path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width={0.5}
            d="M 12.6 21 L 0 21 L 0 0 L 12.6 0 L 12.6 2.46 L 2.85 2.46 L 2.85 8.85 L 11.25 8.85 L 11.25 11.25 L 2.85 11.25 L 2.85 18.54 L 12.6 18.54 L 12.6 21 Z"
            variants={pathVariants}
          />
        </motion.svg>

        {/* T */}
        <motion.svg
          width="30"
          height="30"
          fill="transparent"
          stroke="#f5f5f5"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="start"
          animate="finished"
        >
          <motion.path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width={0.5}
            d="M 9.3 21 L 6.45 21 L 6.45 2.52 L 0 2.52 L 0 0 L 15.75 0 L 15.75 2.52 L 9.3 2.52 L 9.3 21 Z"
            variants={pathVariantsDel2}
          />
        </motion.svg>

        {/* H */}
        <motion.svg
          width="30"
          height="30"
          fill="transparent"
          stroke="#f5f5f5"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="start"
          animate="finished"
        >
          <motion.path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width={0.5}
            d="M 2.85 21 L 0 21 L 0 0 L 2.85 0 L 2.85 8.97 L 13.2 8.97 L 13.2 0 L 16.05 0 L 16.05 21 L 13.2 21 L 13.2 11.43 L 2.85 11.43 L 2.85 21 Z"
            variants={pathVariantsDel3}
          />
        </motion.svg>

        {/* A */}
        <motion.svg
          width="30"
          height="30"
          fill="transparent"
          stroke="#f5f5f5"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="start"
          animate="finished"
        >
          <motion.path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width={0.5}
            d="M 19.44 20.25 L 16.83 21.3 L 14.49 15.3 L 4.77 15.3 L 2.43 21.24 L 0 20.25 L 8.22 0 L 11.34 0 L 19.44 20.25 Z M 9.63 2.82 L 5.67 12.9 L 13.56 12.9 L 9.63 2.82 Z"
            variants={pathVariantsDel2}
          />
        </motion.svg>

        {/* N */}
        <motion.svg
          width="30"
          height="30"
          fill="transparent"
          stroke="#f5f5f5"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="start"
          animate="finished"
        >
          <motion.path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width={0.5}
            d="M 2.7 21 L 0 21 L 0 0 L 3.78 0 L 13.05 17.46 L 13.05 0 L 15.75 0 L 15.75 21 L 12.03 21 L 2.7 3.66 L 2.7 21 Z"
            variants={pathVariants}
          />
        </motion.svg>
      </motion.div>
      <motion.div
        variants={divVariantsRight}
        initial="start"
        animate="finished"
      >
        {/* K */}
        <motion.svg
          width="30"
          height="30"
          fill="transparent"
          stroke="#f5f5f5"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="start"
          animate="finished"
        >
          <motion.path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width={0.5}
            d="M 15.03 19.41 L 13.05 21.45 L 2.85 11.43 L 2.85 21.09 L 0 21.09 L 0 0.09 L 2.85 0.09 L 2.85 9.66 L 11.79 0 L 13.71 1.77 L 5.52 10.29 L 15.03 19.41 Z"
            variants={pathVariantsDel3}
          />
        </motion.svg>

        {/* O */}
        <motion.svg
          width="30"
          height="30"
          fill="transparent"
          stroke="#f5f5f5"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="start"
          animate="finished"
        >
          <motion.path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width={0.5}
            d="M 7.623 21.493 A 10.953 10.953 0 0 0 9.9 21.72 A 11.505 11.505 0 0 0 11.449 21.619 A 9.022 9.022 0 0 0 14.07 20.865 Q 15.9 20.01 17.19 18.525 A 9.792 9.792 0 0 0 17.588 18.037 A 10.42 10.42 0 0 0 19.155 15.06 A 12.157 12.157 0 0 0 19.418 14.181 A 13.333 13.333 0 0 0 19.83 10.83 A 14.465 14.465 0 0 0 19.806 9.997 A 12.432 12.432 0 0 0 19.155 6.63 Q 18.48 4.68 17.19 3.18 Q 15.9 1.68 14.055 0.84 A 8.978 8.978 0 0 0 12.288 0.251 A 10.926 10.926 0 0 0 9.9 0 A 11.805 11.805 0 0 0 8.032 0.143 A 8.898 8.898 0 0 0 4.59 1.425 Q 2.37 2.85 1.185 5.295 A 11.397 11.397 0 0 0 0.335 7.729 A 13.854 13.854 0 0 0 0 10.83 A 14.674 14.674 0 0 0 0.011 11.388 A 12.831 12.831 0 0 0 0.675 15.06 A 11.812 11.812 0 0 0 0.807 15.427 A 10.306 10.306 0 0 0 2.625 18.525 Q 3.9 20.01 5.73 20.865 A 8.743 8.743 0 0 0 7.623 21.493 Z M 9.9 19.26 Q 12.21 19.26 13.77 18.15 A 6.741 6.741 0 0 0 15.968 15.489 A 8.175 8.175 0 0 0 16.125 15.135 Q 16.92 13.23 16.92 10.83 Q 16.92 9.21 16.44 7.71 A 8.92 8.92 0 0 0 15.198 5.212 A 8.436 8.436 0 0 0 15.06 5.025 Q 14.16 3.84 12.855 3.15 A 5.976 5.976 0 0 0 10.63 2.496 A 7.373 7.373 0 0 0 9.9 2.46 A 7.226 7.226 0 0 0 7.953 2.712 A 5.863 5.863 0 0 0 6.135 3.57 A 6.944 6.944 0 0 0 3.855 6.308 A 8.335 8.335 0 0 0 3.735 6.57 A 9.838 9.838 0 0 0 2.999 9.327 A 12.377 12.377 0 0 0 2.91 10.83 Q 2.91 12.45 3.375 13.965 A 8.814 8.814 0 0 0 4.629 16.529 A 8.377 8.377 0 0 0 4.74 16.68 Q 5.64 17.88 6.945 18.57 A 5.976 5.976 0 0 0 9.17 19.225 A 7.373 7.373 0 0 0 9.9 19.26 Z"
            variants={pathVariantsDel2}
          />
        </motion.svg>

        {/* T */}
        <motion.svg
          width="30"
          height="30"
          fill="transparent"
          stroke="#f5f5f5"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="start"
          animate="finished"
        >
          <motion.path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width={0.5}
            d="M 9.3 21 L 6.45 21 L 6.45 2.52 L 0 2.52 L 0 0 L 15.75 0 L 15.75 2.52 L 9.3 2.52 L 9.3 21 Z"
            variants={pathVariants}
          />
        </motion.svg>

        {/* E */}
        <motion.svg
          width="30"
          height="30"
          fill="transparent"
          stroke="#f5f5f5"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="start"
          animate="finished"
        >
          <motion.path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width={0.5}
            d="M 12.6 21 L 0 21 L 0 0 L 12.6 0 L 12.6 2.46 L 2.85 2.46 L 2.85 8.85 L 11.25 8.85 L 11.25 11.25 L 2.85 11.25 L 2.85 18.54 L 12.6 18.54 L 12.6 21 Z"
            variants={pathVariantsDel2}
          />
        </motion.svg>

        {/* L */}
        <motion.svg
          width="30"
          height="30"
          fill="transparent"
          stroke="#f5f5f5"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="start"
          animate="finished"
        >
          <motion.path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width={0.5}
            d="M 12.48 21 L 0 21 L 0 0 L 2.85 0 L 2.85 18.45 L 12.48 18.45 L 12.48 21 Z"
            variants={pathVariants}
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}

export default LetteringMotion;
