// import Typography from "@mui/material/Typography";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// import LogoFadeMobile from "./logoFadeMobile";

// const divVariants = {
//   start: { opacity: 0 },
//   finished: {
//     opacity: 1,

//     transition: {
//       duration: 1,
//       ease: "easeInOut",
//       delay: 0,
//     },
//   },
// };

// export default function LogoText() {
//   return (
//     <>
//       <Link to="/">
//         <LogoFadeMobile />
//       </Link>
//       <Link to="/">
//         <motion.div variants={divVariants} initial="start" animate="finished">
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             sx={{
//               ml: 2,
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               fontFamily: "montserrat",
//               fontWeight: 500,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//               justifyContent: "flex-start",
//             }}
//           >
//             ETHAN KOTEL
//           </Typography>
//         </motion.div>
//       </Link>
//     </>
//   );
// }
