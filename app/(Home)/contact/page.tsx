"use client";
import { Button } from "@/components/ui/button";
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
    <div className="h-screen w-full -my-24">
      <div className="text-center text-4xl space-y-2 font-extrabold mb-12 text-[#1A73E8]">
        <h1>Your Imagination, My Blueprint</h1>
        <h2>Let&apos;s Build Together!</h2>
      </div>
      <div className="rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className="lg:flex mx-auto container justify-center items-center">
          <form
            ref={form}
            className="w-full space-y-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              className="w-full h-14 p-3 outline-none"
              placeholder="Full Name"
              name="user_name"
            />
            <br />
            <input
              type="text"
              className="w-full h-14 p-3 outline-none"
              placeholder="Email"
              name="user_email"
            />
            <br />
            <input
              type="number"
              className="w-full h-14 p-3 outline-none"
              placeholder="Phone No"
              name="user_phone"
            />
            <br />
            <input
              type="text"
              className="w-full h-14 p-3 outline-none"
              placeholder="Subject line"
              name="user_subject"
            />
            <br />
            <textarea
              className="w-full h-24 p-3 outline-none"
              placeholder="Write your message..."
              name="user_subject"
            />
            <br />
            <Button type="submit" value="Send">
              Submit
            </Button>
          </form>
          <div className="w-full">
            <h1>asdgfsdg</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
