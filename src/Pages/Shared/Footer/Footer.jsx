import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [darkMode, setDarkMode] = useState(false);
  const theme = useTheme();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const customizedTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#3f51b5" : "#f50057",
        contrastText: darkMode ? "#fff" : "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={customizedTheme}>
      <footer
        style={{
          backgroundColor: theme.palette.background.paper,
          padding: "20px 0",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <Typography variant="body1" sx={{ margin: "10px" }}>
            <RouterLink
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About Us
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
              to="/blog"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Blog
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
        </Container>
        <Container
          maxWidth="lg"
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          <IconButton
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            <LinkedInIcon
              style={{ margin: "0 5px", color: "black", fontSize: "2.5rem" }}
            />
          </IconButton>
          <IconButton
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            <FacebookIcon
              style={{ margin: "0 5px", color: "black", fontSize: "2.5rem" }}
            />
          </IconButton>
          <IconButton
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            <GitHubIcon
              style={{ margin: "0 5px", color: "black", fontSize: "2.5rem" }}
            />
          </IconButton>
          <IconButton
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            <TwitterIcon
              style={{ margin: "0 5px", color: "black", fontSize: "2.5rem" }}
            />
          </IconButton>
        </Container>
        <Container
          maxWidth="lg"
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          <Typography variant="body2">
            &copy; {currentYear} - All rights reserved by Mayinudin Munna
          </Typography>
        </Container>
      </footer>
    </ThemeProvider>
  );
};

export default Footer;
