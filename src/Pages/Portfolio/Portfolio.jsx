import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  portfolio: { margin: "10rem 0" },
}));

const Portfolio = () => {
  const images = [
    {
      url: "../../../src/assets/images/alpha.png",
      title: "Alpha photography",
      live: "https://alpha-photography-2fcdd.web.app/",
      client: "https://github.com/munnahosssain/Alpha-photography-client",
      server: "https://github.com/munnahosssain/Alpha-photography-server",
      descriptions:
        "Students have a dedicated role, allowing them to browse and select classes, view their selected classes, and make payments for the classes they have booked on their own selected classes.",
    },
    {
      url: "../../../src/assets/images/kidsDay.png",
      title: "Kids Day",
      live: "https://kids-day-97c9b.web.app/",
      client: "https://github.com/munnahosssain/kids-Day-client",
      server: "https://github.com/munnahosssain/kids-Day-server",
      descriptions:
        "Created on a website where children can access and play interactive games designed specifically for their age. Site can promote learning through educational, recreational and fun activities.",
    },
    {
      url: "../../../src/assets/images/masterchef.png",
      title: "Master Chef",
      live: "https://master-chef-30094.web.app/",
      client: "https://github.com/munnahosssain/Master-chef-client",
      server: "https://github.com/munnahosssain/Master-Chef-server",
      descriptions:
        "Top Chefs Network: Connect with renowned chefs, explore their profiles, and enhance your cooking experience, our collection of recipes is designed to satisfy the most discerning palate.",
    },
  ];

  const classes = useStyles();

  return (
    <Container>
      <Typography
        variant="h3"
        style={{ font: "bold", textAlign: "center", margin: "3rem 0 10px 0" }}
      >
        What I'm Doing
      </Typography>
      <Typography variant="body1" style={{ textAlign: "center" }}>
        I love what i do. I take great pride in what i do.
      </Typography>
      <Box
        className={classes.portfolio}
        sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
      >
        {images.map((image) => (
          <Card key={image.title} sx={{ maxWidth: 378, margin: "1rem" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={image.url}
                alt="Alpha photography banner"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {image.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {image.descriptions}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link to={image.live} style={{ textDecoration: "none" }}>
                  Live
                </Link>
              </Button>
              <Button size="small" color="primary">
                <Link to={image.client} style={{ textDecoration: "none" }}>
                  Github Client
                </Link>
              </Button>
              <Button size="small" color="primary">
                <Link to={image.server} style={{ textDecoration: "none" }}>
                  Github Server
                </Link>
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Portfolio;
