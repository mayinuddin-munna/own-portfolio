import React from "react";
import { Container, Typography } from '@mui/material';

const styles = {
  footer: {
    backgroundColor: 'primary.main',
    color: 'primary.contrastText',
    padding: 2,
    marginTop: 'auto',
  },
};

const Footer = () => {
  return (
    <footer sx={styles.footer}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          This is the footer content.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
