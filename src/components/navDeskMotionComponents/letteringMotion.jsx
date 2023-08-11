import { motion } from "framer-motion";
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
  start: { opacity: 0, pathLength: 0 },
  finished: {
    opacity: [0, 0.75, 0.75, 0.9, 1, 1],
    pathLength: 1,
    transition: {
      duration: 3,

      delay: 1.5,
    },
  },
};

function LetteringMotion() {
  //hides animation on mobile
  let mobileCheckDiv = {
    start: { display: "none" },
    finished: { display: "none" },
  };
  const isMobile = window.innerWidth < 1500;
  if (!isMobile) {
    mobileCheckDiv = {
      start: { opacity: 1 },
      finished: {
        opacity: 1,
      },
    };
  }

  let divVariantsLeft = {
    start: { x: "100%" },
    finished: {
      x: ["100%", "80%", "50%", "20%", "-100%"],
      opacity: [1, 1, 1, 0.75, 0],
      transition: {
        duration: 1.75,
        ease: "linear",
        delay: 1.25,
      },
    },
  };
  let divVariantsRight = {
    start: { x: "250%" },
    finished: {
      x: ["250%", "250%", "300%", "400%", "620%"],
      opacity: [1, 1, 1, 0.75, 0],
      transition: {
        duration: 1.75,
        ease: "linear",
        delay: 1.25,
      },
    },
  };

  const isLarge = window.innerWidth > 2000;
  if (isLarge) {
    divVariantsRight = {
      start: { x: "60%" },
      finished: {
        x: ["60%", "150%", "200%", "240%", "420%"],
        opacity: [1, 1, 1, 0.75, 0],
        transition: {
          duration: 1.75,
          ease: "linear",
          delay: 1.25,
        },
      },
    };
  }

  return (
    <motion.div variants={mobileCheckDiv} initial="start" animate="finished">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <motion.div variants={divVariantsLeft}>
            <svg
              width="200"
              height="200"
              fill="transparent"
              stroke="#f5f5f5"
              viewBox="0 10 200 1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.5}
                d="M 82.2 21 L 81.6 21 L 81.6 0 L 82.11 0 L 97.83 20.31 L 97.5 20.31 L 97.5 0 L 98.1 0 L 98.1 21 L 97.59 21 L 81.87 0.69 L 82.2 0.69 L 82.2 21 Z M 0.6 0.57 L 0.6 20.43 L 13.98 20.43 L 13.98 21 L 0 21 L 0 0 L 13.53 0 L 13.53 0.57 L 0.6 0.57 Z M 57.93 21 L 57.24 21 L 66.99 0 L 67.59 0 L 77.34 21 L 76.65 21 L 67.14 0.48 L 67.44 0.48 L 57.93 21 Z M 24.57 21 L 23.97 21 L 23.97 0.57 L 16.17 0.57 L 16.17 0 L 32.37 0 L 32.37 0.57 L 24.57 0.57 L 24.57 21 Z M 37.08 0 L 37.08 21 L 36.48 21 L 36.48 0 L 37.08 0 Z M 52.38 21 L 52.38 0 L 52.98 0 L 52.98 21 L 52.38 21 Z M 52.53 10.05 L 52.53 10.62 L 36.93 10.62 L 36.93 10.05 L 52.53 10.05 Z M 74.1 14.67 L 60.45 14.67 L 60.75 14.1 L 73.8 14.1 L 74.1 14.67 Z M 0.45 10.62 L 0.45 10.05 L 12.18 10.05 L 12.18 10.62 L 0.45 10.62 Z"
                variants={pathVariants}
              />
            </svg>
          </motion.div>
        </Grid>
        <Grid item xs={6}>
          <motion.div variants={divVariantsRight}>
            <motion.svg
              width="200"
              height="200"
              fill="transparent"
              stroke="#f5f5f5"
              viewBox="0 10 200 1"
              xmlns="http://www.w3.org/2000/svg"
              variants={svgVariants}
              initial="start"
              animate="finished"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.5}
                d="M 61.86 0.66 L 61.86 20.52 L 75.24 20.52 L 75.24 21.09 L 61.26 21.09 L 61.26 0.09 L 74.79 0.09 L 74.79 0.66 L 61.86 0.66 Z M 49.35 21.09 L 48.75 21.09 L 48.75 0.66 L 40.95 0.66 L 40.95 0.09 L 57.15 0.09 L 57.15 0.66 L 49.35 0.66 L 49.35 21.09 Z M 94.41 21.09 L 81.3 21.09 L 81.3 0.09 L 81.9 0.09 L 81.9 20.52 L 94.41 20.52 L 94.41 21.09 Z M 25.577 20.804 A 11.774 11.774 0 0 0 28.59 21.18 Q 30.9 21.18 32.865 20.385 Q 34.83 19.59 36.285 18.15 Q 37.74 16.71 38.55 14.79 A 9.932 9.932 0 0 0 39.011 13.428 A 11.233 11.233 0 0 0 39.36 10.59 Q 39.36 8.31 38.55 6.39 Q 37.74 4.47 36.285 3.03 Q 34.83 1.59 32.865 0.795 A 10.497 10.497 0 0 0 31.603 0.376 A 11.774 11.774 0 0 0 28.59 0 Q 26.28 0 24.315 0.795 Q 22.35 1.59 20.895 3.03 Q 19.44 4.47 18.63 6.39 A 9.932 9.932 0 0 0 18.169 7.753 A 11.233 11.233 0 0 0 17.82 10.59 Q 17.82 12.87 18.63 14.79 Q 19.44 16.71 20.895 18.15 Q 22.35 19.59 24.315 20.385 A 10.497 10.497 0 0 0 25.577 20.804 Z M 28.59 20.61 A 10.951 10.951 0 0 0 31.66 20.189 A 9.999 9.999 0 0 0 32.61 19.86 Q 34.47 19.11 35.85 17.745 Q 37.23 16.38 37.995 14.565 A 9.854 9.854 0 0 0 38.733 11.388 A 11.681 11.681 0 0 0 38.76 10.59 A 10.653 10.653 0 0 0 38.431 7.904 A 9.386 9.386 0 0 0 37.995 6.615 Q 37.23 4.8 35.85 3.435 Q 34.47 2.07 32.61 1.32 A 10.485 10.485 0 0 0 29.125 0.582 A 12.13 12.13 0 0 0 28.59 0.57 A 10.951 10.951 0 0 0 25.52 0.992 A 9.999 9.999 0 0 0 24.57 1.32 Q 22.71 2.07 21.33 3.435 Q 19.95 4.8 19.185 6.615 A 9.854 9.854 0 0 0 18.447 9.792 A 11.681 11.681 0 0 0 18.42 10.59 A 10.653 10.653 0 0 0 18.749 13.277 A 9.386 9.386 0 0 0 19.185 14.565 Q 19.95 16.38 21.33 17.745 Q 22.71 19.11 24.57 19.86 A 10.485 10.485 0 0 0 28.055 20.598 A 12.13 12.13 0 0 0 28.59 20.61 Z M 5.85 10.11 L 0.48 15.63 L 0.48 14.82 L 14.82 0.09 L 15.63 0.09 L 6.21 9.78 L 5.85 10.11 Z M 0.6 21.09 L 0 21.09 L 0 0.09 L 0.6 0.09 L 0.6 21.09 Z M 16.32 21.09 L 15.51 21.09 L 5.52 9.78 L 5.97 9.39 L 16.32 21.09 Z M 61.71 10.71 L 61.71 10.14 L 73.44 10.14 L 73.44 10.71 L 61.71 10.71 Z"
                variants={pathVariants}
              />
            </motion.svg>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default LetteringMotion;
