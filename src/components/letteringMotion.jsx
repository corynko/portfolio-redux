import React from "react";
import { animate, motion } from "framer-motion";
import Grid from "@mui/material/Grid";

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
const containerTimeOut = {
  start: {},
  finished: {
    display: "none",

    transition: {
      delay: 4,
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
      finished: {
        opacity: 1,
      },
    };
  }

  return (
    <div className="letteringTopLevel">
      <motion.div
        variants={containerTimeOut}
        initial="start"
        animate="finished"
      >
        <div className="letteringContainer">
          <motion.div
            variants={mobileCheckDiv}
            initial="start"
            animate="finished"
          >
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
            <Grid item xs={12}>
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
                    d="M 0.6 20.7 L 13.98 20.7 L 13.98 21.3 L 0 21.3 L 0 0 L 13.71 0 L 13.71 0.6 L 0.6 0.6 L 0.6 10.11 L 12.09 10.11 L 12.09 10.71 L 0.6 10.71 L 0.6 20.7 Z"
                    vector-effect="non-scaling-stroke"
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
                    d="M 16.92 0 L 16.92 0.6 L 8.76 0.6 L 8.76 21.3 L 8.16 21.3 L 8.16 0.6 L 0 0.6 L 0 0 L 16.92 0 Z"
                    vector-effect="non-scaling-stroke"
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
                    d="M 15.39 0 L 15.99 0 L 15.99 21.3 L 15.39 21.3 L 15.39 10.71 L 0.6 10.71 L 0.6 21.3 L 0 21.3 L 0 0 L 0.6 0 L 0.6 10.11 L 15.39 10.11 L 15.39 0 Z"
                    vector-effect="non-scaling-stroke"
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
                    d="M 0 21.3 L 9.3 0 L 9.84 0 L 19.11 21.3 L 18.45 21.3 L 15.12 13.68 L 3.99 13.68 L 0.66 21.3 L 0 21.3 Z M 4.23 13.08 L 14.85 13.08 L 9.57 0.87 L 4.23 13.08 Z"
                    vector-effect="non-scaling-stroke"
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
                    d="M 16.65 21.3 L 0.6 1.17 L 0.6 21.3 L 0 21.3 L 0 0 L 0.45 0 L 16.74 20.43 L 16.74 0 L 17.34 0 L 17.34 21.3 L 16.65 21.3 Z"
                    vector-effect="non-scaling-stroke"
                    variants={pathVariants}
                  />
                </motion.svg>
              </motion.div>
            </Grid>
          </motion.div>
        </div>
        <div className="letteringContainer">
          <Grid item xs={12}>
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
                  d="M 0.6 21.3 L 0 21.3 L 0 0 L 0.6 0 L 0.6 13.83 L 14.16 0 L 15.03 0 L 5.94 9.3 L 15.45 21.3 L 14.67 21.3 L 5.49 9.72 L 0.6 14.67 L 0.6 21.3 Z"
                  vector-effect="non-scaling-stroke"
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
                  d="M 6.968 21.128 A 9.128 9.128 0 0 0 9.93 21.6 Q 12.03 21.6 13.83 20.73 Q 15.63 19.86 16.98 18.345 Q 18.33 16.83 19.08 14.895 Q 19.83 12.96 19.83 10.8 Q 19.83 8.82 19.11 6.9 Q 18.39 4.98 17.085 3.42 Q 15.78 1.86 13.965 0.93 A 8.193 8.193 0 0 0 12.608 0.382 A 9.164 9.164 0 0 0 9.93 0 Q 7.83 0 6.015 0.885 Q 4.2 1.77 2.85 3.285 Q 1.5 4.8 0.75 6.735 Q 0 8.67 0 10.8 Q 0 12.84 0.72 14.775 Q 1.44 16.71 2.76 18.24 Q 4.08 19.77 5.91 20.685 A 8.463 8.463 0 0 0 6.968 21.128 Z M 0.6 10.8 Q 0.6 12.78 1.29 14.61 Q 1.98 16.44 3.24 17.88 Q 4.5 19.32 6.21 20.16 A 8.308 8.308 0 0 0 9.867 21 A 9.58 9.58 0 0 0 9.93 21 A 8.54 8.54 0 0 0 12.578 20.598 A 7.783 7.783 0 0 0 13.71 20.13 Q 15.42 19.26 16.65 17.79 Q 17.88 16.32 18.555 14.505 Q 19.23 12.69 19.23 10.8 Q 19.23 8.82 18.525 6.99 Q 17.82 5.16 16.56 3.72 Q 15.3 2.28 13.605 1.44 Q 11.91 0.6 9.93 0.6 A 8.559 8.559 0 0 0 7.133 1.05 A 7.927 7.927 0 0 0 6.135 1.47 Q 4.41 2.34 3.18 3.81 Q 1.95 5.28 1.275 7.095 Q 0.6 8.91 0.6 10.8 Z"
                  vector-effect="non-scaling-stroke"
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
                  d="M 16.92 0 L 16.92 0.6 L 8.76 0.6 L 8.76 21.3 L 8.16 21.3 L 8.16 0.6 L 0 0.6 L 0 0 L 16.92 0 Z"
                  vector-effect="non-scaling-stroke"
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
                  d="M 0.6 20.7 L 13.98 20.7 L 13.98 21.3 L 0 21.3 L 0 0 L 13.71 0 L 13.71 0.6 L 0.6 0.6 L 0.6 10.11 L 12.09 10.11 L 12.09 10.71 L 0.6 10.71 L 0.6 20.7 Z"
                  vector-effect="non-scaling-stroke"
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
                  d="M 13.98 21.3 L 0 21.3 L 0 0 L 0.6 0 L 0.6 20.7 L 13.98 20.7 L 13.98 21.3 Z"
                  vector-effect="non-scaling-stroke"
                  variants={pathVariants}
                />
              </motion.svg>
            </motion.div>
          </Grid>
        </div>
      </motion.div>
    </div>
  );
}

export default LetteringMotion;
