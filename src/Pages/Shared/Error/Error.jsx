import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { Typography, Button, Container, Box } from "@mui/material";
import MoodBadIcon from "@mui/icons-material/MoodBad";

const Error = () => {
  const { error, status } = useRouteError();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        padding: "16px",
        backgroundColor: "#F3F4F6",
        color: "#374151",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          my: "auto",
        }}
      >
        <MoodBadIcon sx={{ width: "4rem", height: "4rem", color: "#F59E0B" }} />
        <div
          style={{
            maxWidth: "400px",
            textAlign: "center",
            my: "8",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", fontSize: "6rem", color: "#F59E0B" }}
          >
            {status || 404}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: "2rem",
              color: "#EF4444",
              mb: "8",
              marginBottom: "1rem",
            }}
          >
            {error?.message}
          </Typography>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Back to homepage
            </Button>
          </Link>
        </div>
      </Container>
    </Box>
  );
};

export default Error;
