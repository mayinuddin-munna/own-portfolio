import React from "react";
import "aos/dist/aos.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Typography } from "@material-ui/core";
import banner from "../../../src/assets/images/formal.png";
import aboutCanvas from "../../../src/assets/images/canva.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  contact:{
    margin:'11rem 0'
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
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.about}>
      {/* <img
        data-aos="fade-up"
        src={aboutCanvas}
        alt="Portfolio"
        className={classes.image}
      /> */}
      <Container maxWidth="lg" className={classes.bannerContainer}>
        <div className={classes.textContainer}>
          <Typography variant="h3">About Me</Typography>
          <Typography variant="h6" component="h1" gutterBottom>
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
          <div>
            <Button className="button mr-1">
              <Link to="/contact">Hire me</Link>
            </Button>
          </div>
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
    </div>
  );
};

export default About;
