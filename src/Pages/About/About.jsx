import "./About.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { makeStyles } from "@material-ui/core/styles";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Button, Container, Typography } from "@material-ui/core";
import banner from "../../../src/assets/images/formal.png";

import react from "../../assets/tech/react.png";
import node from "../../assets/tech/node-js.png";
import mui from "../../../src/assets/tech/mui.png";
import jwt from "../../../src/assets/tech/jwt.png";
import git from "../../../src/assets/tech/git.png";
import mongodb from "../../assets/tech/mongodb.png";
import css from "../../../src/assets/tech/css.png";
import figma from "../../assets/tech/figma.png";
import html from "../../../src/assets/tech/html.png";
import redux from "../../../src/assets/tech/redux.png";
import next from "../../../src/assets/tech/next-js.png";
import firebase from "../../../src/assets/tech/firebase.png";
import tailwind from "../../../src/assets/tech/tailwind.png";
import express from "../../../src/assets/tech/express-js.png";
import javascript from "../../../src/assets/tech/javascript.png";
import typeScript from "../../../src/assets/tech/typescript.png";
import SectionTitle from "../../Components/SectionTitle";

const useStyles = makeStyles((theme) => ({
  about: {
    margin: "5rem 0",
  },

  bannerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  textContainer: {
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },

  imageContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    maxWidth: "80%",
    height: "auto",
    borderRadius: theme.spacing(50),
  },

  technology: {
    textAlign: "center",
    marginTop: "5rem",
  },
}));

const About = () => {
  const classes = useStyles();

  const skills = [
    {
      id: 1,
      image: html,
    },
    {
      id: 2,
      image: css,
    },
    {
      id: 3,
      image: javascript,
    },
    {
      id: 4,
      image: react,
    },
    {
      id: 5,
      image: redux,
    },
    {
      id: 6,
      image: typeScript,
    },
    {
      id: 7,
      image: next,
    },
    {
      id: 8,
      image: tailwind,
    },
    {
      id: 9,
      image: mui,
    },
    {
      id: 10,
      image: node,
    },
    {
      id: 11,
      image: mongodb,
    },
    {
      id: 12,
      image: express,
    },
    {
      id: 13,
      image: firebase,
    },
    {
      id: 14,
      image: git,
    },
    {
      id: 15,
      image: jwt,
    },
    {
      id: 16,
      image: figma,
    },
  ];

  return (
    <Container>
      <div className={`${classes.about}`}>
        <div className={classes.bannerContainer}>
          <div className={classes.textContainer}>
            <SectionTitle
              title="About Me"
              subtitle="Native Design & Web developer."
            />
            <Slide bottom cascade>
              <Typography variant="body1">
                I am an enthusiastic and creative front-end developer currently
                in the final year of my graduate program, and I am eager to
                kickstart a rewarding career in this field. With a strong
                passion for creating visually appealing and user-friendly
                websites, I am actively seeking new opportunities to apply and
                enhance my skills as a front-end developer. Currently, I am
                primarily focused on working with the React.js framework, which
                has allowed me to develop dynamic and interactive user
                interfaces.
              </Typography>
            </Slide>
            <Link to="/contact">
              <Button
                variant="contained"
                size="large"
                style={{ marginTop: "10px" }}
              >
                Hire me
              </Button>
            </Link>
          </div>
          <div className={classes.imageContainer}>
            <Zoom cascade>
              <img
                src={banner}
                alt="Portfolio image"
                className={classes.image}
              />
            </Zoom>
          </div>
        </div>
        <div className={`${classes.technology} skill-bg`}>
          <SectionTitle
            title="Technology I'm using"
            subtitle="Things ths i'm good at."
          />
          <Swiper
            slidesPerView={5}
            spaceBetween={150}
            freeMode={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              375: {
                slidesPerView: 3,
                spaceBetween: 100,
              },
              425: {
                slidesPerView: 3,
                spaceBetween: 100,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 120,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 120,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 150,
              },
            }}
            modules={[Autoplay, FreeMode, Pagination]}
          >
            {skills.map((skill) => (
              <SwiperSlide key={skill.id}>
                <img src={skill.image} alt="skill image" className="swiper" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default About;
