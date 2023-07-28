import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { animate, motion } from "framer-motion";

export default function NavItemsDesktop() {
  let divVariants = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,

      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 5,
      },
    },
  };
  const isMobile = window.innerWidth < 1500;
  if (isMobile) {
    divVariants = {
      start: { opacity: 0 },
      finished: {
        opacity: 1,

        transition: {
          duration: 1,
          ease: "easeInOut",
          delay: 1,
        },
      },
    };
  }

  return (
    <motion.div variants={divVariants} initial="start" animate="finished">
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          textAlign: "center",
        }}
      >
        <Link className="contactLink" to="/">
          <Button
            sx={{
              color: "#F5F5F5",
              display: "flex",
              fontFamily: "Raleway",
              marginX: "1rem",
              fontWeight: 300,
              maxHeight: "100px",
              whiteSpace: "nowrap",
              flexGrow: 1,
              borderRadius: "20%",
            }}
            fullWidth={true}
          >
            WHO I AM
          </Button>
        </Link>
        <Link className="contactLink" to="/projects">
          <Button
            sx={{
              color: "#F5F5F5",
              display: "flex",
              fontFamily: "Raleway",
              marginX: "1rem",
              fontWeight: 300,
              maxHeight: "100px",
              whiteSpace: "nowrap",
              flexGrow: 1,
              borderRadius: "20%",
            }}
            fullWidth={true}
          >
            WHAT I DO
          </Button>
        </Link>
        <Link className="contactLink" to="/contact">
          <Button
            sx={{
              color: "#F5F5F5",
              display: "flex",
              fontFamily: "Raleway",
              marginX: "1rem",
              fontWeight: 300,
              maxHeight: "100px",
              whiteSpace: "nowrap",
              flexGrow: 1,
              borderRadius: "20%",
            }}
            fullWidth={true}
          >
            CONTACT ME
          </Button>
        </Link>
        <Button
          sx={{
            color: "#F5F5F5",
            display: "flex",
            fontFamily: "Raleway",
            marginX: "1rem",
            fontWeight: 300,
            maxHeight: "100px",
            whiteSpace: "nowrap",
            flexGrow: 1,
            borderRadius: "20%",
          }}
          href="https://ethankotel.photos"
          fullWidth={true}
        >
          PHOTOS
        </Button>
        <Button
          sx={{
            color: "#F5F5F5",
            display: "flex",
            fontFamily: "Raleway",
            fontWeight: 300,
            maxHeight: "100px",
            whiteSpace: "nowrap",
            flexGrow: 1,
            borderRadius: "20%",
          }}
          href="https://www.ethankotel.com/"
          fullWidth={true}
        >
          AUDIO
        </Button>
      </Box>
    </motion.div>
  );
}
