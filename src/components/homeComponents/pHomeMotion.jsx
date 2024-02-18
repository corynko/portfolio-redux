import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import EKAvatar from "../../assets/images/EKP_self_portrait.jpg";

function PHomeMotion() {
  let divTopVariants = {
    start: { opacity: 0, stroke: "#F5F5F5" },
    finished: {
      opacity: 1,
      fill: "#F5F5F5",
      transition: {
        duration: 1.3,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  let h4Variants = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.8,
        ease: "easeInOut",
        delay: 1.3,
      },
    },
  };

  let pVariants = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.8,
        ease: "easeInOut",
        delay: 1.6,
      },
    },
  };

  let imgVariants = {
    start: { opacity: 0, borderRadius: "0 200%" },
    finished: {
      opacity: 1,
      borderRadius: "0 60%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 1,
        borderRadius: {
          duration: 1.5,
          delay: 1,
        },
      },
    },
  };

  const isMobile = window.innerWidth < 1500;
  if (isMobile) {
    divTopVariants = {
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

    h4Variants = {
      start: { opacity: 0 },
      finished: {
        opacity: 1,
        transition: {
          duration: 1.5,
          ease: "easeInOut",
          delay: 2,
        },
      },
    };

    pVariants = {
      start: { opacity: 0 },
      finished: {
        opacity: 1,
        transition: {
          duration: 1.5,
          ease: "easeInOut",
          delay: 2.2,
        },
      },
    };

    imgVariants = {
      start: { opacity: 0, borderRadius: "0 200%" },
      finished: {
        opacity: 1,
        borderRadius: "0 60%",
        transition: {
          duration: 1.5,
          ease: "easeInOut",
          delay: 1.9,
          borderRadius: {
            duration: 1.5,
            delay: 1.6,
          },
        },
      },
    };
  }

  return (
    <Box className="center homeImgBox" display={"flex"}>
      <motion.div
        variants={h4Variants}
        initial="start"
        animate="finished"
        className="centerDiv"
      >
        <motion.img
          className="EKAvatar"
          src={EKAvatar}
          alt="Ethan Kotel Headshot"
          variants={imgVariants}
        />
      </motion.div>
      <motion.div
        variants={divTopVariants}
        initial={"start"}
        animate={"finished"}
      >
        <motion.h4 className="pageH4" variants={h4Variants}>
          I am a Colorado based developer, musician, and photographer.
        </motion.h4>
        <div className="divHomeWrapper">
          <motion.p className="pageBodyText" variants={pVariants}>
            My aim at all times is to refresh stale workflows using an
            outsider's perspective, without sacrificing form
            <span className="bold"> nor </span>
            functionality. Since starting my journey in full-stack web
            development, I have made it a point to blend my keen eye for design
            with my strong background in marketing, in order to deliver both
            <span className="bold"> highly practical </span>and
            <span className="bold"> highly attractive </span>solutions for any
            industry.
          </motion.p>
          <div style={{ marginTop: "40px" }}></div>
          <motion.p className="pageBodyText" variants={pVariants}>
            I pride myself on being an extremely
            <span className="bold"> efficient </span>and
            <span className="bold"> adventurous </span>self-starter. I don't
            believe in doing things the same way simply because "that's how it's
            always been done," and am always looking for the next opportunity to
            <span className="bold"> innovate routine workflows </span>with the
            experience I've gained from working in numerous, widely varied
            industries.
          </motion.p>
        </div>
      </motion.div>
    </Box>
  );
}

export default PHomeMotion;
