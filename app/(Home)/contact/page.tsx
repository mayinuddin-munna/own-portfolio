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
      <div className="text-center text-2xl md:text-6xl space-y-2 font-extrabold mb-12">
        <h1>Your Imagination, My Blueprint</h1>
        <h2>Let&apos;s Build Together!</h2>
      </div>
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
            {...register("user_name", {
              required: true,
              maxLength: 100,
            })}
            error={errors.user_name ? true : false}
            helperText={errors.user_name && "Name is required"}
          />
          <br />
          <input
            type="text"
            className="w-full h-14 p-3 outline-none"
            placeholder="Email"
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
          <br />
          <input
            type="number"
            className="w-full h-14 p-3 outline-none"
            placeholder="Phone no"
            {...register("user_phone", {
              required: true,
              minLength: 10,
              maxLength: 11,
            })}
            error={errors.user_phone ? true : false}
            helperText={errors.user_phone && "Phone number is required"}
          />
          <br />
          <input
            type="text"
            className="w-full h-14 p-3 outline-none"
            placeholder="Subject line"
            {...register("user_subject", {
              required: true,
              maxLength: 100,
            })}
            error={errors.user_subject ? true : false}
            helperText={errors.user_subject && "Subject is required"}
          />
          <br />
          <textarea
            className="w-full h-24 p-3 outline-none"
            placeholder="Write your message..."
            {...register("message", { required: true })}
            error={errors.message ? true : false}
          />
          <br />
          <Button type="submit" value="Send">
            Submit
          </Button>
          {message && <p>Thanks, I&apos;ll reply ASAP :)</p>}
        </form>
        <div className="w-full flex justify-center">
          <h1>Loading...</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
