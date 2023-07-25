import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  start: {
    rotate: -60,
  },
  finished: {
    rotate: 0,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const pathVariants = {
  start: { opacity: 0, pathLength: 0 },
  finished: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      delay: 1,
    },
  },
};

function RightMotion() {
  return (
    <div>
      <motion.svg
        width="120"
        height="120"
        fill="transparent"
        stroke="#f5f5f5"
        viewBox="0 0 120 110"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="start"
        animate="finished"
      >
        {/* E */}
        <motion.path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width={0.5}
          d="M 16.8 28 L 0 28 L 0 0 L 16.8 0 L 16.8 3.28 L 3.8 3.28 L 3.8 11.8 L 15 11.8 L 15 15 L 3.8 15 L 3.8 24.72 L 16.8 24.72 L 16.8 28 Z"
          variants={pathVariants}
        />
        {/* T */}
        <motion.path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width={0.5}
          d="M 12.4 28 L 8.6 28 L 8.6 3.36 L 0 3.36 L 0 0 L 21 0 L 21 3.36 L 12.4 3.36 L 12.4 28 Z"
          variants={pathVariants}
        />
        {/* H */}
        <motion.path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width={0.5}
          d="M 3.8 28 L 0 28 L 0 0 L 3.8 0 L 3.8 11.96 L 17.6 11.96 L 17.6 0 L 21.4 0 L 21.4 28 L 17.6 28 L 17.6 15.24 L 3.8 15.24 L 3.8 28 Z"
          variants={pathVariants}
        />
        {/* A */}
        <motion.path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width={0.5}
          d="M 25.92 27 L 22.44 28.4 L 19.32 20.4 L 6.36 20.4 L 3.24 28.32 L 0 27 L 10.96 0 L 15.12 0 L 25.92 27 Z M 12.84 3.76 L 7.56 17.2 L 18.08 17.2 L 12.84 3.76 Z"
          variants={pathVariants}
        />
        {/* N */}
        <motion.path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width={0.5}
          d="M 3.6 28 L 0 28 L 0 0 L 5.04 0 L 17.4 23.28 L 17.4 0 L 21 0 L 21 28 L 16.04 28 L 3.6 4.88 L 3.6 28 Z"
          variants={pathVariants}
        />
        {/* K */}
        <motion.path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width={0.5}
          d="M 20.04 25.88 L 17.4 28.6 L 3.8 15.24 L 3.8 28.12 L 0 28.12 L 0 0.12 L 3.8 0.12 L 3.8 12.88 L 15.72 0 L 18.28 2.36 L 7.36 13.72 L 20.04 25.88 Z"
          variants={pathVariants}
        />
        {/* O */}
        <motion.path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width={0.5}
          d="M 10.164 28.657 A 14.604 14.604 0 0 0 13.2 28.96 A 15.34 15.34 0 0 0 15.265 28.825 A 12.03 12.03 0 0 0 18.76 27.82 Q 21.2 26.68 22.92 24.7 A 13.055 13.055 0 0 0 23.45 24.049 A 13.894 13.894 0 0 0 25.54 20.08 A 16.209 16.209 0 0 0 25.891 18.908 A 17.778 17.778 0 0 0 26.44 14.44 Q 26.44 11.44 25.54 8.84 Q 24.64 6.24 22.92 4.24 Q 21.2 2.24 18.74 1.12 A 11.97 11.97 0 0 0 16.384 0.335 A 14.568 14.568 0 0 0 13.2 0 Q 9.08 0 6.12 1.9 Q 3.16 3.8 1.58 7.06 A 15.195 15.195 0 0 0 0.446 10.305 A 18.473 18.473 0 0 0 0 14.44 A 19.565 19.565 0 0 0 0.014 15.185 A 17.107 17.107 0 0 0 0.9 20.08 A 15.75 15.75 0 0 0 1.076 20.569 A 13.741 13.741 0 0 0 3.5 24.7 Q 5.2 26.68 7.64 27.82 A 11.657 11.657 0 0 0 10.164 28.657 Z M 13.2 25.68 A 10.607 10.607 0 0 0 15.579 25.426 A 7.726 7.726 0 0 0 18.36 24.2 A 8.988 8.988 0 0 0 21.29 20.652 A 10.901 10.901 0 0 0 21.5 20.18 A 13.643 13.643 0 0 0 22.429 16.609 A 17.401 17.401 0 0 0 22.56 14.44 Q 22.56 12.28 21.92 10.28 A 11.894 11.894 0 0 0 20.264 6.95 A 11.248 11.248 0 0 0 20.08 6.7 Q 18.88 5.12 17.14 4.2 A 7.969 7.969 0 0 0 14.174 3.327 A 9.831 9.831 0 0 0 13.2 3.28 A 9.634 9.634 0 0 0 10.603 3.616 A 7.818 7.818 0 0 0 8.18 4.76 A 9.259 9.259 0 0 0 5.14 8.411 A 11.114 11.114 0 0 0 4.98 8.76 A 13.117 13.117 0 0 0 3.999 12.435 A 16.503 16.503 0 0 0 3.88 14.44 Q 3.88 16.6 4.5 18.62 A 11.752 11.752 0 0 0 6.173 22.039 A 11.17 11.17 0 0 0 6.32 22.24 A 8.748 8.748 0 0 0 9.26 24.76 A 7.969 7.969 0 0 0 12.227 25.633 A 9.831 9.831 0 0 0 13.2 25.68 Z"
          variants={pathVariants}
        />
        {/* T */}
        <motion.path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width={0.5}
          d="M 12.4 28 L 8.6 28 L 8.6 3.36 L 0 3.36 L 0 0 L 21 0 L 21 3.36 L 12.4 3.36 L 12.4 28 Z"
          variants={pathVariants}
        />
        {/* E */}
        <motion.path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width={0.5}
          d="M 16.8 28 L 0 28 L 0 0 L 16.8 0 L 16.8 3.28 L 3.8 3.28 L 3.8 11.8 L 15 11.8 L 15 15 L 3.8 15 L 3.8 24.72 L 16.8 24.72 L 16.8 28 Z"
          variants={pathVariants}
        />
        {/* L */}
        <motion.path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width={0.5}
          d="M 16.64 28 L 0 28 L 0 0 L 3.8 0 L 3.8 24.6 L 16.64 24.6 L 16.64 28 Z"
          variants={pathVariants}
        />
      </motion.svg>
    </div>
  );
}

export default RightMotion;
