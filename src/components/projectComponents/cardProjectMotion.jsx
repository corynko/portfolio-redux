import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { animate, delay, motion } from "framer-motion";

import smBackend from "../../assets/images/projects/smbackend_scrnsht.jpg";
import codeGauntlet from "../../assets/images/projects/code_gauntlet_scrnsht.jpg";
import workoutWizard from "../../assets/images/projects/workout_wizard_scrnsht.jpg";
import portfolio from "../../assets/images/projects/portfolio_scrnsht.jpg";
import readmeGen from "../../assets/images/projects/README_generator_scrnsht.jpg";
import nhlFanPlan from "../../assets/images/projects/nhl_fan_plan_scrnsht.jpg";

export default function ImgMediaCard() {
  let divVariants = {
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
  let divVariants2 = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 2.5,
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
        delay: 2.8,
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
        delay: 3.1,
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
        delay: 3.4,
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
        delay: 3.7,
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
        <motion.div variants={divVariants2} initial="start" animate="finished">
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

        <motion.div variants={divVariants3} initial="start" animate="finished">
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
      </div>
      <div className="cardDivWrapper center">
        <motion.div variants={divVariants4} initial="start" animate="finished">
          <Card className="projectCard">
            <CardMedia
              component="img"
              alt="readme generator screen shot"
              className="projectImg"
              src={readmeGen}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                README Generator
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A command line interface built with NodeJS, Inquirer, and FS for
                quickly generating README markup files.
              </Typography>
            </CardContent>
            <CardActions className="center">
              <Button
                target="_blank"
                href="https://github.com/corynko/README-Generator"
                size="small"
              >
                GitHub
              </Button>
            </CardActions>
          </Card>
        </motion.div>
        <motion.div variants={divVariants5} initial="start" animate="finished">
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
        <motion.div variants={divVariants6} initial="start" animate="finished">
          <Card className="projectCard">
            <CardMedia
              component="img"
              alt="Social Media Backend screen shot"
              className="projectImg"
              src={smBackend}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Social Media Backend
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A working NoSQL database API, using NodeJS, MongoDB, and
                Mongoose.
              </Typography>
            </CardContent>
            <CardActions className="center">
              <Button
                target="_blank"
                href="https://github.com/corynko/Social-Media-Backend"
                size="small"
              >
                GitHub
              </Button>
            </CardActions>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
