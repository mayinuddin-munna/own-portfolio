import { Link as RouterLink } from "react-router-dom";
import Lottie from "lottie-react";
import banner from "../../../../public/boilAnimation.json";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Container, Typography, IconButton, Divider } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const icons = [
    {
      id: 2,
      url: "https://www.linkedin.com/in/mayinuddin-munna-b8b9541a1",
      icon: <LinkedInIcon />,
      backgroundColor: "#0082ca",
    },
    {
      id: 3,
      url: "https://www.facebook.com/profile.php?id=100073611545089",
      icon: <FacebookIcon />,
      backgroundColor: "#3b5998",
    },
    {
      id: 4,
      url: "https://github.com/munnahosssain",
      icon: <GitHubIcon />,
      backgroundColor: "#333333",
    },
    {
      id: 5,
      url: "https://twitter.com/mohamad_munna",
      icon: <TwitterIcon />,
      backgroundColor: "#55acee",
    },
    {
      id: 6,
      url: "https://www.google.com",
      icon: <GoogleIcon />,
      backgroundColor: "#dd4b39",
    },
    {
      id: 1,
      url: "https://instagram.com/mohamad_munna",
      icon: <InstagramIcon />,
      backgroundColor: "#ac2bac",
    },
  ];

  return (
    <Container>
      <Divider sx={{ my: { xs: 2, sm: 8 }, mx: 6 }} />
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Typography variant="body1" sx={{ margin: "10px" }}>
          <RouterLink
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            About Me
          </RouterLink>
        </Typography>
        <Typography variant="body1" sx={{ margin: "10px" }}>
          <RouterLink
            to="/services"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Services
          </RouterLink>
        </Typography>
        <Typography variant="body1" sx={{ margin: "10px" }}>
          <RouterLink
            to="/portfolio"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Portfolio
          </RouterLink>
        </Typography>
        <Typography variant="body1" sx={{ margin: "10px" }}>
          <RouterLink
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Contact
          </RouterLink>
        </Typography>
      </div>
      {/* <Lottie
          style={{ height: "29.5rem" }}
          animationData={banner}
          loop={true}
        /> */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {icons.map((icon) => (
          <IconButton
            key={icon.id}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textShadow: "10px",
              margin: "0 .5rem 0 .5rem",
              backgroundColor: icon.backgroundColor,
            }}
          >
            {icon.icon}
          </IconButton>
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Typography variant="body2">
          &copy; {currentYear} - All rights reserved by Mayinudin Munna
        </Typography>
      </div>
    </Container>
  );
};

export default Footer;
