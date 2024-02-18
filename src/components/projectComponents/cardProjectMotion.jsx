import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import evergroove from "../../assets/images/projects/evergroove_scrnsht.png";
import insight from "../../assets/images/projects/insight_consultation_scrnsht.png";
import ellmanGallery from "../../assets/images/projects/ellman_gallery_scrnsht.png";
import cwPortfolio from "../../assets/images/projects/cw_portfolio_scrnsht.png";
import codeGauntlet from "../../assets/images/projects/code_gauntlet_scrnsht.jpg";
import workoutWizard from "../../assets/images/projects/workout_wizard_scrnsht.jpg";
import portfolio from "../../assets/images/projects/portfolio_scrnsht.jpg";
import nhlFanPlan from "../../assets/images/projects/nhl_fan_plan_scrnsht.jpg";
import astroDash from "../../assets/images/projects/astroDash_scrnsht.png";

import cwPortfolioPDF from "../../assets/other/CW_Portfolio_EthanKotel.pdf";

export default function ImgMediaCard() {
  let divVariants = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 1.5,
      },
    },
  };
  let divVariants2 = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 1.8,
      },
    },
  };
  let divVariants3 = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 2.1,
      },
    },
  };
  let divVariants4 = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 2.4,
      },
    },
  };
  let divVariants5 = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 2.7,
      },
    },
  };
  let divVariants6 = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 3,
      },
    },
  };
  let divVariants7 = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 3.3,
      },
    },
  };
  let divVariants8 = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 3.4,
      },
    },
  };

  return (
    <div className="projectWrapper">
      <div className="cardDivWrapper center">
        <motion.div variants={divVariants} initial="start" animate="finished">
          <Card className="projectCard">
            <CardMedia
              component="img"
              alt="astroDash screenshot"
              className="projectImg"
              src={astroDash}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                astroDash
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A data aggregator for planning astrophotography shoots using
                third party API's. Currently in progress.
              </Typography>
            </CardContent>
            <CardActions className="center">
              <Button
                target="_blank"
                href="https://github.com/corynko/astrodash"
                size="small"
              >
                GitHub
              </Button>
              <Button
                target="_blank"
                href="https://astrodash.space"
                size="small"
              >
                Live Site
              </Button>
            </CardActions>
          </Card>
        </motion.div>
        <motion.div variants={divVariants2} initial="start" animate="finished">
          <Card className="projectCard">
            <CardMedia
              component="img"
              alt="Evergroove Studio screen shot"
              className="projectImg"
              s
              src={evergroove}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Evergroove Studio
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Colorado's recording retreat, located in Evergreen, Colorado.
                Site designed, built, and written, and photo collateral created
                by me.
              </Typography>
            </CardContent>
            <CardActions className="center">
              <Button
                target="_blank"
                href="https://evergroove.com/"
                size="small"
              >
                Live Site
              </Button>
            </CardActions>
          </Card>
        </motion.div>
        <motion.div variants={divVariants3} initial="start" animate="finished">
          <Card className="projectCard">
            <CardMedia
              component="img"
              alt="Copywriting Portfolio screen shot"
              className="projectImg"
              src={cwPortfolio}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Copywriting Portfolio
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A PDF download, containing samples designed to help nonprofit
                leadership teams learn how to begin marketing digitally.
              </Typography>
            </CardContent>
            <CardActions className="center">
              <Button
                size="small"
                download="CW_Portfolio_EthanKotel"
                href={cwPortfolioPDF}
              >
                Download
              </Button>
            </CardActions>
          </Card>
        </motion.div>
        <motion.div variants={divVariants4} initial="start" animate="finished">
          <Card className="projectCard">
            <CardMedia
              component="img"
              alt="Insight Consultation screen shot"
              className="projectImg"
              s
              src={insight}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Insight Consultation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dedicated to helping parents learn more about how to best
                support their children. Designed, built, and written by me.
              </Typography>
            </CardContent>
            <CardActions className="center">
              <Button
                target="_blank"
                href="https://code-gauntlet-3e9a71d036dd.herokuapp.com/"
                size="small"
              >
                Live Site
              </Button>
            </CardActions>
          </Card>
        </motion.div>
      </div>
      <div className="cardDivWrapper center">
        <motion.div variants={divVariants5} initial="start" animate="finished">
          <Card className="projectCard">
            <CardMedia
              component="img"
              alt="portfolio screen shot"
              className="projectImg"
              src={portfolio}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                This Portfolio
              </Typography>
              <Typography variant="body2" color="text.secondary">
                My portfolio is open source! If you see something you like, feel
                free to clone the repo and experiment with it yourself. Initial
                build finished in 7 days.
              </Typography>
            </CardContent>
            <CardActions className="center">
              <Button
                target="_blank"
                href="https://github.com/corynko/portfolio-redux"
                size="small"
              >
                GitHub
              </Button>
              <Button
                target="_blank"
                href="https://ethankotel.dev"
                size="small"
              >
                Live Site
              </Button>
            </CardActions>
          </Card>
        </motion.div>
        <motion.div variants={divVariants6} initial="start" animate="finished">
          <Card className="projectCard">
            <CardMedia
              component="img"
              alt="Code Gauntlet screen shot"
              className="projectImg"
              s
              src={codeGauntlet}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Code Gauntlet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A full stack application that tracks and stores user
                information, utilizing React, MaterialUI, NodeJS, GraphQL and
                Mongoose, built in 5 days.
              </Typography>
            </CardContent>
            <CardActions className="center">
              <Button
                target="_blank"
                href="https://github.com/ryantixier/code-gauntlet"
                size="small"
              >
                GitHub
              </Button>
              <Button
                target="_blank"
                href="https://code-gauntlet-3e9a71d036dd.herokuapp.com/"
                size="small"
              >
                Live Site
              </Button>
            </CardActions>
          </Card>
        </motion.div>
        <motion.div variants={divVariants7} initial="start" animate="finished">
          <Card className="projectCard">
            <CardMedia
              component="img"
              alt="Workout Wizard screen shot"
              className="projectImg"
              src={workoutWizard}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Workout Wizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A full stack application that tracks user information and stores
                it in an SQL database, utilizing MySQL, NodeJs and Handlebars,
                built in 7 days.
              </Typography>
            </CardContent>
            <CardActions className="center">
              <Button
                target="_blank"
                href="https://github.com/ryantixier/Workout-Wizard"
                size="small"
              >
                GitHub
              </Button>
              <Button
                target="_blank"
                href="https://the-workout-wizard-7d5c29c6d6dd.herokuapp.com/"
                size="small"
              >
                Live Site
              </Button>
            </CardActions>
          </Card>
        </motion.div>
        <motion.div variants={divVariants8} initial="start" animate="finished">
          <Card className="projectCard">
            <CardMedia
              component="img"
              alt="NHL Fan Plan screen shot"
              className="projectImg"
              src={nhlFanPlan}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                NHL Fan Plan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A front-end-only experiment to shove as much storage
                functionality as possible into a client-side application. Built
                in 7 days.
              </Typography>
            </CardContent>
            <CardActions className="center">
              <Button
                target="_blank"
                href="https://github.com/corynko/NHL-Fan-Plan"
                size="small"
              >
                GitHub
              </Button>
              <Button
                target="_blank"
                href="https://corynko.github.io/NHL-Fan-Plan/"
                size="small"
              >
                Live Site
              </Button>
            </CardActions>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
