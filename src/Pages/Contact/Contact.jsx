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
    // flex: 1,
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

  const onSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setMessage(false);
    }, 5000);
    emailjs
      .sendForm(
        "service_rrppkuy",
        "template_jyp87fm",
        e.target,
        "4Bw15YiS9HySm79E2"
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
          <form ref={form} onSubmit={onSubmit}>
            <div>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                name="user_name"
                margin="normal"
                {...register("firstName", { required: true, maxLength: 80 })}
                error={errors.firstName ? true : false}
                helperText={errors.firstName && "First name is required"}
              />
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                name="user_email"
                {...register("email", {
                  required: true,
                  minLength: 5,
                  pattern: /^\S+@\S+$/i,
                })}
                error={errors.email ? true : false}
                helperText={
                  errors.email && "Please enter a valid email address"
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
                {...register("subject", { required: true, maxLength: 100 })}
                error={errors.subject ? true : false}
                helperText={errors.subject && "Subject is required"}
              />
              <TextField
                label="Mobile number"
                variant="outlined"
                margin="normal"
                fullWidth
                name="user_phone"
                type="number"
                {...register("mobileNumber", {
                  required: true,
                  minLength: 11,
                  maxLength: 14,
                })}
                error={errors.mobileNumber ? true : false}
                helperText={errors.mobileNumber && "Mobile number is required"}
              />
            </div>
            <div>
              <FormControl
                fullWidth
                sx={{ m: 1 }}
                variant="standard"
                margin="normal"
                name="message"
              >
                <InputLabel htmlFor="standard-adornment-amount">
                  Message...
                </InputLabel>
                <Input id="standard-adornment-amount" />
              </FormControl>
            </div>
            <div>
              <Button type="submit" variant="contained">
                Submit
              </Button>
              {message && <p>Thanks, I'll replay ASAP :)</p>}
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
