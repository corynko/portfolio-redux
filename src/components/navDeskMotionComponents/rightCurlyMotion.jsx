import { motion } from "framer-motion";

const svgVariants = {
  start: {
    rotate: 60,
  },
  finished: {
    rotate: [90, 80, 60, 20, 0],

    transition: {
      duration: 1,
      ease: "linear",
    },
  },
};

const pathVariants = {
  start: { opacity: 0.85, pathLength: 0 },
  finished: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeIn",
      delay: 0.15,
    },
  },
};

const divVariants = {
  start: { x: "50%" },
  finished: {
    x: ["50%", "190%", "240%", "290%", "600%"],
    opacity: [1, 1, 1, 0.6, 0],
    transition: {
      duration: 1.4,
      ease: "linear",
      delay: 1.25,
    },
  },
};

function RightMotion() {
  //hides animation on mobile
  let mobileCheckDiv = {
    start: { display: "none" },
    finished: { display: "none" },
  };
  const isMobile = window.innerWidth < 1500;
  if (!isMobile) {
    mobileCheckDiv = {
      finished: {
        opacity: 1,
      },
    };
  }
  return (
    <div>
      <motion.div variants={mobileCheckDiv} initial="start" animate="finished">
        <motion.div variants={divVariants} initial="start" animate="finished">
          <motion.svg
            width="120"
            height="120"
            fill="transparent"
            stroke="#f5f5f5"
            viewBox="0 -5 120 120"
            xmlns="http://www.w3.org/2000/svg"
            variants={svgVariants}
            initial="start"
            animate="finished"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0.5}
              d="M 2.64 0 L 3.24 0 A 35.035 35.035 0 0 1 7.372 0.229 Q 9.484 0.48 11.241 1.008 A 15.011 15.011 0 0 1 14.4 2.34 Q 18.48 4.68 20.4 9.18 Q 22.061 13.074 22.69 18.405 A 51.073 51.073 0 0 1 22.86 20.1 Q 23.324 25.617 23.389 32.508 A 242.069 242.069 0 0 1 23.4 34.8 Q 23.4 41.64 25.08 44.94 A 15.223 15.223 0 0 0 28.719 49.537 A 18.704 18.704 0 0 0 30.12 50.64 L 30.72 51 A 8.91 8.91 0 0 1 32.112 52.128 Q 32.833 52.855 33.205 53.655 A 4.189 4.189 0 0 1 33.6 55.44 L 33.6 56.88 A 4.39 4.39 0 0 1 32.598 59.644 Q 31.901 60.533 30.72 61.32 L 30 61.8 A 15.145 15.145 0 0 0 26.624 64.889 A 13.478 13.478 0 0 0 25.02 67.44 Q 23.557 70.475 23.415 76.252 A 51.811 51.811 0 0 0 23.4 77.52 A 218.239 218.239 0 0 1 23.297 84.409 Q 23.197 87.559 23.001 90.378 A 126.842 126.842 0 0 1 22.86 92.22 A 45.122 45.122 0 0 1 22.194 97.11 Q 21.54 100.444 20.4 103.08 Q 18.48 107.52 14.4 109.86 Q 11.394 111.584 6.759 112.038 A 36.176 36.176 0 0 1 3.24 112.2 L 2.64 112.2 Q 1.44 112.2 0.72 111.48 Q 0 110.76 0 109.56 L 0 107.88 A 3.246 3.246 0 0 1 0.101 107.048 A 2.363 2.363 0 0 1 0.72 105.96 Q 1.44 105.24 2.64 105.24 L 3.24 105.24 Q 6.95 105.169 9.388 104.058 A 7.835 7.835 0 0 0 12.12 102.06 A 10.707 10.707 0 0 0 13.792 99.328 Q 14.926 96.729 15.364 92.865 A 37.375 37.375 0 0 0 15.42 92.34 A 110.617 110.617 0 0 0 15.768 87.785 Q 16.075 82.429 16.08 75.233 A 342.469 342.469 0 0 0 16.08 75 A 38.071 38.071 0 0 1 16.359 70.245 Q 16.662 67.843 17.294 65.834 A 18.192 18.192 0 0 1 18.24 63.42 A 16.472 16.472 0 0 1 23.949 56.877 A 20.353 20.353 0 0 1 25.08 56.16 A 20.142 20.142 0 0 1 21.777 53.648 A 16.907 16.907 0 0 1 19.98 51.66 A 16.53 16.53 0 0 1 17.661 47.456 A 20.245 20.245 0 0 1 17.04 45.54 Q 16.08 42 16.08 37.32 A 293.428 293.428 0 0 0 16.016 30.975 Q 15.874 24.439 15.42 19.86 A 31.186 31.186 0 0 0 14.892 16.394 Q 14.068 12.555 12.334 10.342 A 8.992 8.992 0 0 0 12.12 10.08 A 7.846 7.846 0 0 0 8.888 7.854 Q 7.589 7.351 5.965 7.131 A 20.356 20.356 0 0 0 3.24 6.96 L 2.64 6.96 Q 1.44 6.96 0.72 6.24 Q 0 5.52 0 4.32 L 0 2.64 A 3.246 3.246 0 0 1 0.101 1.808 A 2.363 2.363 0 0 1 0.72 0.72 Q 1.44 0 2.64 0 Z"
              variants={pathVariants}
              initial="start"
              animate="finished"
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default RightMotion;
