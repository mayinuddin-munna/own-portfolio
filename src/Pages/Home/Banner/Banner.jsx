import "./Banner.css";
import Lottie from "lottie-react";
import React, { useEffect } from "react";
import ScrollToTop from "react-scroll-up";
import SouthIcon from "@mui/icons-material/South";
import { useDencrypt } from "use-dencrypt-effect";
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

  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  image: {
    maxWidth: "100%",
    height: "auto",
  },
}));

const Banner = () => {
  const classes = useStyles();
  const [encrypt, setEncrypt] = useDencrypt("Mayinuddin Munna");

  useEffect(() => {
    const loop = async () => {
      for (let i = 0; i < 1; i++) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        await setEncrypt(encrypt);
      }
    };
    loop();
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 10000,
      smooth: "easeInOutQuint",
    });
  };

  return (
    <div className={classes.banner}>
      <Container maxWidth="lg" className={classes.bannerContainer}>
        <div className={classes.textContainer}>
          <Typography variant="h6">
            <span
              style={{ color: "red", paddingLeft: "4px", fontWeight: "bold" }}
            >
              Hello
            </span>
            , i am
          </Typography>
          <h1 className="encrypt">{encrypt}</h1>
          <h3 className="skill-title">Native Design & Web Developer.</h3>
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
        <Lottie
          className={classes.imageContainer}
          style={{ height: "29.5rem" }}
          animationData={banner}
          loop={true}
        />
      </Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SouthIcon
          className={classes.arrow}
          style={{
            cursor: "pointer",
            borderRadius: "50%",
            padding: ".5rem",
            fontSize: "3rem",
          }}
        />
      </div>
      <img src={canvas} alt="canvas" className={classes.image} />
      <ScrollToTop  onClick={scrollToTop} showUnder={960}>
        <KeyboardDoubleArrowUpIcon
          sx={{ fontSize: "2rem" }}
          className={classes.arrow}
        />
      </ScrollToTop>
    </div>
  );
};

export default Banner;
