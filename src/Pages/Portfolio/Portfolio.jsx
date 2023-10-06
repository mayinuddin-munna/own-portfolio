import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box, Card } from "@mui/material";

// Images
import author1 from "../../assets/images/banner1.png";
import author2 from "../../assets/images/banner1.png";
import author3 from "../../assets/images/banner1.png";

const Portfolio = () => {
  const post1 =
    "https://images.unsplash.com/photo-1592489637182-8c172d6d7826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2300&q=80";
  const post2 =
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80";
  const post3 =
    "https://images.unsplash.com/photo-1444877466744-dc2f2af2b931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80";

  return (
    <Box component="section" py={7}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <Card
              image={post1}
              category={{ color: "primary", label: "house" }}
              title="Shared Coworking"
              description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
              author={{
                image: author1,
                name: "Mathew Glock",
                date: "Posted on 28 February",
              }}
              action={{
                type: "internal",
                route: "/pages/blogs/single-article",
              }}
            >
              Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.
              </Card>
          </Grid>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <Card
              image={post2}
              category={{ color: "info", label: "house" }}
              title="Really Housekeeping"
              description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
              author={{
                image: author2,
                name: "Mathew Glock",
                date: "Posted on 28 February",
              }}
              action={{
                type: "internal",
                route: "/pages/blogs/single-article",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <Card
              image={post3}
              category={{ color: "warning", label: "house" }}
              title="Shared Coworking"
              description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
              author={{
                image: author3,
                name: "Mathew Glock",
                date: "Posted on 28 February",
              }}
              action={{
                type: "internal",
                route: "/pages/blogs/single-article",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
