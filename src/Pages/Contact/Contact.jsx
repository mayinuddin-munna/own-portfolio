import Fade from "react-reveal/Fade";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { FormHelperText } from "@mui/material";
import React, { useRef, useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Input, Typography } from "@material-ui/core";
import sendMail from "../../../src/assets/images/sentMailIcon.svg";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import { TextField, Button, FormControl, InputLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contact: {
    margin: "11rem 0",
  },
  bannerContainer: {
    margin: "",
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
    <Fade bottom cascade>
      <div className={classes.contact}>
        <Container maxWidth="lg" className={classes.bannerContainer}>
          <Fade left cascade>
            <div className={classes.textContainer}>
              <Typography
                variant="h4"
                style={{
                  fontWeight: "bolder",
                  marginBottom: "2rem",
                  borderBottom: "3px solid red",
                  textAlign: "center",
                }}
              >
                Contact information
              </Typography>
              <Typography
                variant="h5"
                mt={2}
                style={{
                  display: "flex",
                  marginTop: "1rem",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "2rem",
                  letterSpacing: "5px",
                }}
              >
                Mayinuddin Munna
              </Typography>
              <Typography
                variant="body1"
                mt={2}
                style={{
                  display: "flex",
                  fontSize: "1.5rem",
                  alignItems: "center",
                  marginTop: ".3rem",
                }}
              >
                Frontend Web Developer.
              </Typography>
              <Typography
                variant="body1"
                component="h1"
                gutterBottom
                style={{
                  display: "flex",
                  margin: "1rem 0",
                  alignItems: "center",
                }}
              >
                <PhoneIcon sx={{ marginRight: 1 }} /> Phone: +880 1572394249
              </Typography>
              <Typography
                variant="body1"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MarkEmailUnreadIcon sx={{ marginRight: 1 }} />
                Email: mayinuddin.munna@gmail.com
              </Typography>
              <Typography
                variant="body1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "1rem 0",
                }}
              >
                <PlaceIcon sx={{ marginRight: 1 }} /> Address: Baitul Aman
                Housing, Adabor Dhaka - 1207
              </Typography>
              <img
                src={sendMail}
                alt="Portfolio image"
                className={classes.image}
              />
            </div>
          </Fade>
          <Fade right cascade>
          <div>
            <Typography variant="h4" style={{ fontWeight: "bolder" }}>
              Send me a message.
            </Typography>
            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className={darkModeActive ? "dark-mode" : "light-mode"}
            >
              <div>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  name="user_name"
                  margin="normal"
                  {...register("user_name", { required: true, maxLength: 80 })}
                  error={errors.user_name ? true : false}
                  helperText={errors.user_name && "Full name is required"}
                  InputProps={{
                    style: {
                      color: darkModeActive ? "#ffffff" : "#000000",
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
              </div>
              <div>
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
                  padding: "15px",
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
                <Button type="submit" variant="contained">
                  Submit
                </Button>
                {message && <p>Thanks, I'll reply ASAP :)</p>}
              </div>
            </form>
          </div>
          </Fade>
        </Container>
      </div>
    </Fade>
  );
};

export default Contact;
