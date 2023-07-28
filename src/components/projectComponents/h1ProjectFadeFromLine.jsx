import { animate, delay, motion } from "framer-motion";

function H1ProjectDrawMotion() {
  //speeds up animation on mobile
  let h1Variants = {
    start: { opacity: 0, stroke: "#F5F5F5" },
    finished: {
      opacity: 1,
      fill: "#F5F5F5",
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 1.6,
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
        HERE'S SOME OF MY WORK
      </motion.h1>
    </div>
  );
}

export default H1ProjectDrawMotion;
