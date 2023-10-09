import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { experimentalStyled as styled } from "@mui/material/styles";

const projects = [
  {
    id: 1,
    title: "Galaxy Meeting",
    url: "../../../src/assets/images/galaxyMeeting.png",
    live: "https://galaxy-meeting-app.web.app/",
    client:
      "https://github.com/munnahosssain/online-meeting-recording-app-client",
    server:
      "https://github.com/munnahosssain/online-meeting-recording-app-server",
    descriptions:
      "Students have a dedicated role, allowing them to browse and select classes, view their selected classes, and make payments for the classes they have booked on their own selected classes.",
  },
  {
    id: 2,
    title: "Alpha photography",
    url: "../../../src/assets/images/alpha.png",
    live: "https://alpha-photography-2fcdd.web.app/",
    client: "https://github.com/munnahosssain/Alpha-photography-client",
    server: "https://github.com/munnahosssain/Alpha-photography-server",
    descriptions:
      "Students have a dedicated role, allowing them to browse and select classes, view their selected classes, and make payments for the classes they have booked on their own selected classes.",
  },
  {
    id: 3,
    title: "Kids Day",
    url: "../../../src/assets/images/kidsDay.png",
    live: "https://kids-day-97c9b.web.app/",
    client: "https://github.com/munnahosssain/kids-Day-client",
    server: "https://github.com/munnahosssain/kids-Day-server",
    descriptions:
      "Created on a website where children can access and play interactive games designed specifically for their age. Site can promote learning through educational, recreational and fun activities.",
  },
  {
    id: 4,
    title: "Master Chef",
    url: "../../../src/assets/images/masterChef.png",
    live: "https://master-chef-30094.web.app/",
    client: "https://github.com/munnahosssain/Master-chef-client",
    server: "https://github.com/munnahosssain/Master-Chef-server",
    descriptions:
      "Top Chefs Network: Connect with renowned chefs, explore their profiles, and enhance your cooking experience, our collection of recipes is designed to satisfy the most discerning palate.",
  },
];

const defaultTheme = createTheme();

function Portfolio() {
  return (
    <ThemeProvider theme={defaultTheme} py={12}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <Container maxWidth="md" component="main">
        <Grid container spacing={2} alignItems="flex-end">
          {projects.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={6}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      // mb: 2,
                    }}
                  >
                    {/* <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography> */}
                  </Box>
                  <img src={tier.url} alt="" loading="lazy" style={{width:"100%"}}/>
                  {/* <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul> */}
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Portfolio;
