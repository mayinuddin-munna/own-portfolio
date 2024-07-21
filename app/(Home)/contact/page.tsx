"use client"
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
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
    // emailjs
    //   .sendForm(
    //     "service_rrppkuy", // email service
    //     "template_jyp87fm", // email template
    //     form.current,
    //     "4Bw15YiS9HySm79E2" // Public Key
    //   )
    //   .then((result) => {
    //     setMessage(true);
    //     reset();
    //     console.log(result.text);
    //   });
  };

  return (
    <div className="h-screen">
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="name" />
        <input type="text" name="name" />
        <input type="text" name="name" />
        <input type="text" name="name" />
      </form>
    </div>
  );
};

export default Contact;
