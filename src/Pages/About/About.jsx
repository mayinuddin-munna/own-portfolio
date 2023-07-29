import "swiper/css";
import React from "react";
import "aos/dist/aos.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Typography } from "@material-ui/core";
import mongodb from "../../assets/images/mongodb.png";
import react from "../../assets/images/react.png";
import node from "../../assets/images/node-js.png";
import figma from "../../assets/images/figma--v1.png";
import banner from "../../../src/assets/images/formal.png";
import html from "../../../src/assets/images/html5.png";
import css from "../../../src/assets/images/css3.png";
import javascript from "../../../src/assets/images/javascript.png";
import express from "../../../src/assets/images/express-js.png";
import git from "../../../src/assets/images/git.png";
import mui from "../../../src/assets/images/mui.png";
import next from "../../../src/assets/images/next-js.png";
import typeScript from "../../../src/assets/images/typescript.png";
import redux from "../../../src/assets/images/redux.png";
import jwt from "../../../src/assets/images/jwt.png";
import tailwind from "../../../src/assets/images/tailwind.png";
import firebase from "../../../src/assets/images/firebase.png";

const useStyles = makeStyles((theme) => ({
  about: {
    margin: "7rem 0",
  },
  bannerContainer: {
    margin: "",
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
    borderRadius: "50%",
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

  return (
    <div className={`${classes.about}`}>
      <Container maxWidth="lg" className={classes.bannerContainer}>
        <div className={classes.textContainer}>
          <Typography variant="h3" style={{ fontWeight: "bold" }}>
            About Me
          </Typography>
          <Typography
            variant="h6"
            component="h1"
            gutterBottom
            style={{ fontWeight: "bold" }}
          >
            Native Design & Front-End developer.
          </Typography>
          <Typography variant="body1">
            I am an enthusiastic and creative front-end developer currently in
            the final year of my graduate program, and I am eager to kickstart a
            rewarding career in this field. With a strong passion for creating
            visually appealing and user-friendly websites, I am actively seeking
            new opportunities to apply and enhance my skills as a front-end
            developer. Currently, I am primarily focused on working with the
            React.js framework, which has allowed me to develop dynamic and
            interactive user interfaces.
          </Typography>
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
          <img
            data-aos="fade-up"
            data-aos-duration="3000"
            src={banner}
            alt="Portfolio image"
            className={classes.image}
          />
        </div>
      </Container>
      <Container className={`${classes.technology} skill-bg`}>
        <Container style={{ margin: "2rem 0" }}>
          <Typography variant="h3" style={{ fontWeight: "bold" }}>
            Technology I'm using.
          </Typography>
          <Typography variant="h6">Things ths i'm good at.</Typography>
        </Container>
        <Swiper
          slidesPerView={5}
          spaceBetween={150}
          freeMode={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode, Pagination]}
        >
          <SwiperSlide>
            <img src={html} alt="html" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={css} alt="css" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={javascript} alt="javascript" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={react} alt="react" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={redux} alt="redux" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={typeScript} alt="typeScript" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={next} alt="next" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={tailwind} alt="tailwind" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mui} alt="mui" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={node} alt="node" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mongodb} alt="mongodb" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={express} alt="express" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={firebase} alt="firebase" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={git} alt="git" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={jwt} alt="jwt" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={figma} alt="figma" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default About;
