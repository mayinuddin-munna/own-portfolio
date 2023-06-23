import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import bannerImg from "../../../assets/images/banner1.png";
import canvas from "../../../assets/images/canva.png";
import SouthIcon from "@mui/icons-material/South";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  banner: { margin: "13rem 0" },
  bannerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(4),
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
  nameWeight: {
    marginBottom:"10px",
    fontWeight: 600,
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: theme.spacing(1),
  },
  scroll: {
    left: 0,
    right: 0,
    position: "absolute",
  },
}));

const Banner = () => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={classes.banner}>
      <Container maxWidth="lg" className={classes.bannerContainer}>
        <div className={classes.textContainer}>
          <Typography variant="h6">
            <span style={{color:'lightBlue',paddingLeft:'4px'}}>Hello</span>, i am
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            className={classes.nameWeight}
            gutterBottom
          >
            Mayinuddin Munna.
          </Typography>
          <Typography variant="h5" className={classes.nameWeight}>
            Native Design & Front-End Developer.
          </Typography>
        </div>
        <div className={classes.imageContainer}>
          <img
            src={bannerImg}
            alt="Portfolio image"
            className={`${classes.image} css-mxi1ow`}
          />
        </div>
      </Container>
      <SouthIcon style={{ display: "flex" }} />
      <img
        data-aos="fade-up"
        src={canvas}
        alt="Portfolio"
        className={classes.image}
      />
    </div>
  );
};

export default Banner;
