import Lottie from "lottie-react";
import React, { useEffect } from "react";
import ScrollToTop from "react-scroll-up";
import SouthIcon from "@mui/icons-material/South";
import banner from "../../../../public/banner.json";
import { makeStyles } from "@material-ui/core/styles";
import canvas from "../../../assets/images/canva.png";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button, Container, Typography } from "@material-ui/core";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const useStyles = makeStyles((theme) => ({
  banner: {
    margin: "4rem 0",
  },
  arrow: {
    animation: "$bounce 2s infinite",
  },
  "@keyframes bounce": {
    "0%, 100%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(10px)",
    },
  },
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
    marginBottom: "10px",
    fontWeight: 600,
    // fontFamily: 'Wallpoet', "cursive"
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
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <div>
        <Container maxWidth="lg" className={classes.bannerContainer}>
          <div className={classes.textContainer}>
            <Typography variant="h6">
              <span style={{ color: "red", paddingLeft: "4px" }}>Hello</span>, i
              am
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
            <div style={{ marginTop: "1.5rem", fontWeight: "bold" }}>
              <a href="/Mayinuddin_Munna-resume-GoogleDocs.pdf" download>
                <Button
                  sx={{ fontWeight: "bold" }}
                  variant="contained"
                  endIcon={<FileDownloadIcon />}
                >
                  Resume
                </Button>
              </a>
            </div>
          </div>
          <div className={classes.imageContainer}>
            <Lottie
              style={{ height: "29.5rem" }}
              animationData={banner}
              // loop={true}
            />
          </div>
        </Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              cursor: "pointer",
              borderRadius: "50%",
              padding: ".5rem",
            }}
          >
            <SouthIcon
              className={classes.arrow}
              style={{
                fontSize: "2rem",
              }}
            />
          </div>
        </div>
        <img src={canvas} alt="Portfolio" className={classes.image} />
        <ScrollToTop showUnder={960}>
          <KeyboardDoubleArrowUpIcon
            sx={{ fontSize: "3rem" }}
            className={classes.arrow}
          />
        </ScrollToTop>
      </div>
    </div>
  );
};

export default Banner;
