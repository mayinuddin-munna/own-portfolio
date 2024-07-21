"use client";
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
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div>
        <div className="text-center text-4xl font-extrabold text-[#1A73E8]">
          <h1 className=" ">Your Imagination ➡️ My Blueprint</h1>
          <h2 className="">Let&apos;s Build Together!</h2>
        </div>
        <div>
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name" name="user_name" />{" "}
            <br />
            <input type="text" placeholder="Email" name="user_email" />
            <br />
            <input type="number" placeholder="Phone No" name="user_phone" />
            <br />
            <input type="text" placeholder="Subject line" name="user_subject" />
            <br />
            <textarea placeholder="Write your message..." name="user_subject" />
            <br />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
