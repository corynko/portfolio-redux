import { motion } from "framer-motion";

function H1ProjectDrawMotion() {
  let h1Variants = {
    start: { opacity: 0, stroke: "#F5F5F5" },
    finished: {
      opacity: 1,
      fill: "#F5F5F5",
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.7,
      },
    },
  };

  return (
    <div className="center">
      {/* DENVER */}
      <motion.h1
        variants={h1Variants}
        initial={"start"}
        animate={"finished"}
        className="pageH1"
      >
        SELECTED PROJECTS
      </motion.h1>
    </div>
  );
}

export default H1ProjectDrawMotion;
