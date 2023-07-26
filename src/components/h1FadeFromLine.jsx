import React from "react";
import { animate, delay, motion } from "framer-motion";

function H1HomeDrawMotion() {
  return (
    <div>
      {/* DENVER */}
      <motion.h1
        initial={{ opacity: 0, stroke: "#F5F5F5" }}
        animate={{ opacity: 1, fill: "#F5F5F5" }}
        transition={{
          duration: 1.1,
          ease: "easeOut",
          delay: 5,
          staggerChildren: 0.5,
        }}
      >
        DENVER BASED FULL STACK DEVELOPER
      </motion.h1>
    </div>
  );
}

export default H1HomeDrawMotion;
