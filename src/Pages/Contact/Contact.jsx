import './Contact.css'
import Fade from "react-reveal/Fade";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import { FormHelperText } from "@mui/material";
import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Input, Typography } from "@material-ui/core";
import { TextField, Button, FormControl, InputLabel } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  contact: {
    margin: "7rem 0",
  },
  bannerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  textContainer: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    borderRadius: "50%",
    justifyContent: "center",
  },
  image: {
    maxWidth: "80%",
    height: "auto",
    borderRadius: theme.spacing(50),
  },
}));

const Contact = () => {
  const form = useRef();
  const classes = useStyles();
  const [message, setMessage] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 8000);
    emailjs
      .sendForm(
        "service_rrppkuy", // email service
        "template_jyp87fm", // email template
        form.current,
        "4Bw15YiS9HySm79E2" // Public Key
      )
      .then((result) => {
        setMessage(true);
        reset();
        console.log(result.text);
      });
  };

  const [darkModeActive, setDarkModeActive] = useState(false);

  return (
    <Fade left cascade>
      <div className={classes.contact}>
        <Container maxWidth="lg" className={classes.bannerContainer}>
          <div>
            <Box sx={{ width: "100%" }} className="headlineContact" >
              <Grid container>
                <Grid
                  item
                  xs={6}
                  style={{
                    textAlign: "right",
                    borderRight: "7px solid red",
                    padding: ".5rem",
                  }}
                >
                  YOUR IMAGINATION <br /> MY BLUEPRINT
                </Grid>
                <Grid item xs={6} style={{ padding: ".5rem" }}>
                  LET'S BUILD <br />
                  TOGETHER!
                </Grid>
              </Grid>
            </Box>
            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              // className={darkModeActive ? "dark-mode" : "light-mode"}
            >
              <div>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  name="user_name"
                  margin="normal"
                  {...register("user_name", {
                    required: true,
                    maxLength: 80,
                  })}
                  error={errors.user_name ? true : false}
                  helperText={errors.user_name && "Full name is required"}
                  InputProps={{
                    style: {
                      color: darkModeActive ? "#ffffff" : "#ffffff",
                      backgroundColor: darkModeActive ? "#333333" : "#ffffff",
                    },
                  }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  style={{ color: "inherit" }}
                  name="user_email"
                  {...register("user_email", {
                    required: true,
                    minLength: 5,
                    pattern: /^\S+@\S+$/i,
                  })}
                  error={errors.user_email ? true : false}
                  helperText={
                    errors.user_email && "Please enter a valid email address"
                  }
                  InputProps={{
                    style: {
                      color: darkModeActive ? "#ffffff" : "#000000",
                      backgroundColor: darkModeActive ? "#333333" : "#ffffff",
                    },
                  }}
                />
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  name="user_subject"
                  margin="normal"
                  {...register("user_subject", {
                    required: true,
                    maxLength: 100,
                  })}
                  error={errors.user_subject ? true : false}
                  helperText={errors.user_subject && "Subject is required"}
                  InputProps={{
                    style: {
                      color: darkModeActive ? "#ffffff" : "#000000",
                      backgroundColor: darkModeActive ? "#333333" : "#ffffff",
                    },
                  }}
                />
                <TextField
                  label="Mobile number"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="user_phone"
                  type="number"
                  {...register("user_phone", {
                    required: true,
                    minLength: 11,
                    maxLength: 14,
                  })}
                  error={errors.user_phone ? true : false}
                  helperText={errors.user_phone && "Mobile number is required"}
                  InputProps={{
                    style: {
                      color: darkModeActive ? "#ffffff" : "#000000",
                      backgroundColor: darkModeActive ? "#333333" : "#ffffff",
                    },
                  }}
                />
              </div>
              <FormControl
                fullWidth
                sx={{ m: 1 }}
                margin="normal"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  padding: "1rem 1rem 0 .6rem",
                }}
              >
                <InputLabel
                  htmlFor="standard-adornment-amount"
                  style={{ padding: "15px" }}
                >
                  Message...
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  {...register("message", { required: true })}
                  error={errors.message ? true : false}
                  InputProps={{
                    style: {
                      color: darkModeActive ? "#ffffff" : "#000000",
                      backgroundColor: darkModeActive ? "#333333" : "#ffffff",
                    },
                  }}
                />
                {errors.message && (
                  <FormHelperText error>Please enter a message</FormHelperText>
                )}
              </FormControl>
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
                {message && <p>Thanks, I'll reply ASAP :)</p>}
              </div>
            </form>
          </div>
        </Container>
      </div>
    </Fade>
  );
};

export default Contact;
