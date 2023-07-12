import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Input, Typography } from "@material-ui/core";
import sendMail from "../../../src/assets/images/sentMailIcon.svg";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import LanguageIcon from "@mui/icons-material/Language";
import { TextField, Button, FormControl, InputLabel } from "@material-ui/core";
import { FormHelperText } from "@mui/material";

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

  return (
    <div className={classes.contact}>
      <Container maxWidth="lg" className={classes.bannerContainer}>
        <div className={classes.textContainer}>
          <Typography variant="h4" style={{ fontWeight: "bolder" }}>
            Contact information
          </Typography>
          <Typography
            variant="h6"
            component="h1"
            gutterBottom
            style={{
              display: "flex",
              margin: "1rem 0",
              alignItems: "center",
            }}
          >
            <PlaceIcon sx={{ marginRight: 1 }} /> Address: 1207 - Baitul Aman
            Housing, Adabor Dhaka
          </Typography>
          <Typography
            variant="body1"
            style={{
              display: "flex",
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
              margin: "1rem 0",
            }}
          >
            <MarkEmailUnreadIcon sx={{ marginRight: 1 }} />
            Email: mayinuddin.munna@gmail.com
          </Typography>
          <Typography
            variant="body1"
            mt={2}
            style={{
              display: "flex",
              marginBottom: "2rem",
              alignItems: "center",
            }}
          >
            <LanguageIcon sx={{ marginRight: 1 }} />
            Website: mayinuddinmunna.web.app
          </Typography>
          <img src={sendMail} alt="Portfolio image" className={classes.image} />
        </div>
        <div>
          <Typography variant="h4" style={{ fontWeight: "bolder" }}>
            Send us a message
          </Typography>
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
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
              />
            </div>
            <div>
              <FormControl
                fullWidth
                sx={{ m: 1 }}
                variant="standard"
                margin="normal"
              >
                <InputLabel htmlFor="standard-adornment-amount">
                  Message...
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  {...register("message", { required: true })}
                  error={errors.message ? true : false}
                />
                {errors.message && (
                  <FormHelperText error>Please enter a message</FormHelperText>
                )}
              </FormControl>
            </div>
            <div>
              <Button type="submit" variant="contained">
                Submit
              </Button>
              {message && <p>Thanks, I'll reply ASAP :)</p>}
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
