import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import { Container, Typography } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   bannerContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: theme.spacing(4),
//     [theme.breakpoints.down('sm')]: {
//       flexDirection: 'column',
//     },
//   },
//   textContainer: {
//     flex: 1,
//     [theme.breakpoints.down('sm')]: {
//       marginBottom: theme.spacing(2),
//     },
//   },
//   imageContainer: {
//     flex: 1,
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   image: {
//     maxWidth: '100%',
//     height: 'auto',
//     borderRadius: theme.spacing(1),
//   },
// }));

const Banner = () => {
  // const classes = useStyles();
  
  return (
    <Container maxWidth="lg" className={classes.bannerContainer}>
      <div className={classes.textContainer}>
        <Typography variant="h4" component="h1" gutterBottom>
          Your Name's Portfolio
        </Typography>
        <Typography variant="body1">Showcase your work and skills</Typography>
      </div>
      <div className={classes.imageContainer}>
        <img
          src="your-image-url.jpg"
          alt="Portfolio"
          className={classes.image}
        />
      </div>
    </Container>
  );
};

export default Banner;
