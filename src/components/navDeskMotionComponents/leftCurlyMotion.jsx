import { motion } from "framer-motion";

const svgVariants = {
  start: {
    rotate: 60,
  },
  finished: {
    rotate: [90, 80, 60, 20, 0],

    transition: {
      ease: "linear",
      duration: 1,
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
  start: { x: "300%" },
  finished: {
    x: ["300%", "155%", "125%", "95%", "-500%"],
    opacity: [1, 1, 1, 0.6, 0],
    transition: {
      duration: 1.4,
      ease: "linear",
      delay: 1.25,
    },
  },
};

function LeftMotion() {
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
            d="M 30.96 112.2 L 30.36 112.2 A 35.035 35.035 0 0 1 26.228 111.972 Q 24.116 111.72 22.36 111.192 A 15.011 15.011 0 0 1 19.2 109.86 Q 15.12 107.52 13.2 103.02 Q 11.539 99.127 10.911 93.796 A 51.073 51.073 0 0 1 10.74 92.1 Q 10.276 86.583 10.211 79.692 A 242.069 242.069 0 0 1 10.2 77.4 Q 10.2 70.56 8.52 67.2 A 14.488 14.488 0 0 0 4.294 62.147 A 17.334 17.334 0 0 0 3.48 61.56 L 2.88 61.2 A 8.91 8.91 0 0 1 1.488 60.073 Q 0.767 59.345 0.396 58.546 A 4.189 4.189 0 0 1 0 56.76 L 0 55.32 A 4.39 4.39 0 0 1 1.002 52.556 Q 1.699 51.668 2.88 50.88 L 3.6 50.4 A 16.717 16.717 0 0 0 6.755 47.506 A 14.047 14.047 0 0 0 8.58 44.7 A 12.393 12.393 0 0 0 9.434 42.304 Q 10.2 39.3 10.2 34.68 A 218.239 218.239 0 0 1 10.303 27.791 Q 10.403 24.641 10.599 21.823 A 126.842 126.842 0 0 1 10.74 19.98 A 45.122 45.122 0 0 1 11.407 15.091 Q 12.06 11.756 13.2 9.12 Q 15.12 4.68 19.2 2.34 Q 22.206 0.616 26.841 0.162 A 36.176 36.176 0 0 1 30.36 0 L 30.96 0 A 3.246 3.246 0 0 1 31.793 0.101 A 2.363 2.363 0 0 1 32.88 0.72 Q 33.6 1.44 33.6 2.64 L 33.6 4.32 A 3.246 3.246 0 0 1 33.499 5.153 A 2.363 2.363 0 0 1 32.88 6.24 Q 32.16 6.96 30.96 6.96 L 30.36 6.96 A 18.957 18.957 0 0 0 27.188 7.207 Q 23.481 7.838 21.54 10.08 Q 18.893 13.139 18.207 19.544 A 36.509 36.509 0 0 0 18.18 19.8 A 107.948 107.948 0 0 0 17.832 24.335 Q 17.52 29.775 17.52 37.2 Q 17.52 42.652 16.195 46.631 A 18.618 18.618 0 0 1 15.36 48.72 A 16.511 16.511 0 0 1 9.306 55.552 A 20.26 20.26 0 0 1 8.52 56.04 A 17.478 17.478 0 0 1 12.198 58.838 A 15.542 15.542 0 0 1 13.62 60.48 A 17.331 17.331 0 0 1 16.016 64.946 A 20.789 20.789 0 0 1 16.56 66.66 Q 17.52 70.2 17.52 74.88 A 288.763 288.763 0 0 0 17.584 81.168 Q 17.655 84.413 17.804 87.189 A 115.741 115.741 0 0 0 18.18 92.28 Q 18.84 99 21.54 102.06 A 8.321 8.321 0 0 0 24.806 104.276 Q 26.157 104.807 27.847 105.047 A 20.801 20.801 0 0 0 30.36 105.24 L 30.96 105.24 A 3.246 3.246 0 0 1 31.793 105.341 A 2.363 2.363 0 0 1 32.88 105.96 Q 33.6 106.68 33.6 107.88 L 33.6 109.56 A 3.246 3.246 0 0 1 33.499 110.393 A 2.363 2.363 0 0 1 32.88 111.48 Q 32.16 112.2 30.96 112.2 Z"
            variants={pathVariants}
            initial="start"
            animate="finished"
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}

export default LeftMotion;
