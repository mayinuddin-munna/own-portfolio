import "./Portfolio.css";
import React from "react";
import Paper from "@mui/material/Paper";
import SectionTitle from "../../Components/SectionTitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  //   textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AllProjects = () => {
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
    {
      id: 5,
      title: "Master Chef",
      url: "../../../src/assets/images/masterChef.png",
      live: "https://master-chef-30094.web.app/",
      client: "https://github.com/munnahosssain/Master-chef-client",
      server: "https://github.com/munnahosssain/Master-Chef-server",
      descriptions:
        "Top Chefs Network: Connect with renowned chefs, explore their profiles, and enhance your cooking experience, our collection of recipes is designed to satisfy the most discerning palate.",
    },
    {
      id: 6,
      title: "Master Chef",
      url: "../../../src/assets/images/masterChef.png",
      live: "https://master-chef-30094.web.app/",
      client: "https://github.com/munnahosssain/Master-chef-client",
      server: "https://github.com/munnahosssain/Master-Chef-server",
      descriptions:
        "Top Chefs Network: Connect with renowned chefs, explore their profiles, and enhance your cooking experience, our collection of recipes is designed to satisfy the most discerning palate.",
    },
  ];

  return (
    <Container>
      <Box component="section" py={4}>
        <Typography
          variant="h3"
          style={{ fontWeight: "bold", margin: "1rem 0" }}
        >
          <SectionTitle
            title="All project are here"
            subtitle="What i have already done"
          />
        </Typography>
        {projects.map((project) => (
          <Box key={project.id} sx={{ flexGrow: 1, margin: "3rem 0" }}>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 2, sm: 4, md: 12 }}
            >
              <Grid xs={2} sm={4} md={12}>
                <Item>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      // color: "#1A73E8",
                      fontWeight: "700",
                      //   margin: "2rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={project.url}
                        alt="image"
                        style={{
                          width: "40%",
                          borderRadius: "3.5rem",
                          marginBottom: "1rem",
                          padding: "3rem",
                        }}
                      />

                      <div>
                        <Typography
                          variant="h4"
                          gutterBottom
                          sx={{ fontWeight: "700" }}
                        >
                          {project.title}
                        </Typography>
                        <Typography gutterBottom>
                          {project.descriptions}
                        </Typography>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                        >
                          {/* <Typography>{project.live}</Typography>
                          <Typography>{project.client}</Typography>
                          <Typography>{project.server}</Typography> */}
                        </div>
                      </div>
                    </div>
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default AllProjects;
