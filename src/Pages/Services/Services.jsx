import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SyncIcon from "@mui/icons-material/Sync";
import Grid from "@mui/material/Unstable_Grid2";
import TimerIcon from "@mui/icons-material/Timer";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { experimentalStyled as styled } from "@mui/material/styles";
import AutoCount from "../../Components/AutoCount";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import SectionTitle from "../../Components/SectionTitle";

const useStyles = makeStyles((theme) => ({
  sideBanner: {
    display: "flex",
    height: "30rem",
    alignItems: "center",
    backgroundSize: "cover",
    justifyContent: "center",
    backgroundPosition: "center",
    backgroundImage:
      'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url("../../../src/assets/images/rotateFont.jpeg")',
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Services() {
  const classes = useStyles();

  const data = [
    {
      id: 200,
      title: "Coded Elements",
      description:
        "From buttons, to inputs, navbars, alerts or cards, you are covered",
    },
    {
      id: 100,
      title: "Design Blocks",
      description:
        "Mix the sections, change the colors and unleash your creativity",
    },
    {
      id: 41,
      title: "Pages",
      description:
        "Save 3-4 weeks of work when you use our pre-made pages for your website",
    },
  ];
  const providedServices = [
    {
      id: 1,
      image: <DevicesIcon />,
      title: "Fully Responsive",
      description:
        "Regardless of the screen size, the website content will naturally fit the given resolution.",
    },
    {
      id: 1,
      image: <SyncIcon />,
      title: "Continuous Update",
      description:
        "We confidently deploy improvement and new updates to website",
    },
    {
      id: 1,
      image: <FavoriteBorderIcon />,
      title: "Support",
      description:
        "6 months of free technical support to help you build your website faster",
    },
    {
      id: 1,
      image: <TimerIcon />,
      title: "Save Time & Money",
      description:
        "Creating your design from scratch with dedicated designers can be very expensive.",
    },
  ];

  return (
    <Container>
      <Box component="section">
        <div style={{ textAlign: "center" }}>
          <SectionTitle
            title=" What I'm Doing"
            subtitle="I love what i do. I take great pride in what i do."
          />
        </div>
        <Box sx={{ flexGrow: 1, margin: "3rem 0" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 2.5 }}
            columns={{ xs: 2, sm: 4, md: 12 }}
          >
            {data.map((dt) => (
              <Grid xs={2} sm={4} md={4} key={dt.id}>
                <Item>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      color: "#1A73E8",
                      fontWeight: "700",
                      margin: "-2rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AutoCount endValue={dt.id} />+
                    </div>
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: "700" }}
                  >
                    {dt.title}
                  </Typography>
                  <Typography>{dt.description}</Typography>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Grid container spacing={2} sx={{ mt: -5 }}>
          <Grid item xs={12} md={4}>
            <Item className={classes.sideBanner}>
              <div>
                <TouchAppIcon style={{ color: "#1A73E8" }} />
                <Typography sx={{ padding: "2rem", color: "#fff" }}>
                  All the components that you need in a development have been
                  re-design with the new look.
                </Typography>
              </div>
            </Item>
          </Grid>
          <Grid md={7.8} sx={{ mx: { xs: 0, md: 1.2 } }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 4, md: 8 }}
            >
              {providedServices.map((providedService) => (
                <Grid xs={2} sm={2} md={4} key={providedService.id}>
                  <Item style={{ height: "14.2rem" }}>
                    <Typography sx={{ color: "#1A73E8", fontSize: "3rem" }}>
                      {providedService.image}
                    </Typography>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ fontWeight: "700" }}
                    >
                      {providedService.title}
                    </Typography>
                    <Typography>{providedService.description}</Typography>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Services;
