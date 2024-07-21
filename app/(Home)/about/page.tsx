import myPhoto from '../../../src/images/formal.png'
import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="lg:flex mx-auto container justify-center items-center">
        <div className="w-full">
          <p className="text-cente">
            I am an enthusiastic and creative Full Stack developer currently in
            the final year of my graduate program, and I am eager to kickstart a
            rewarding career in this field. With a strong passion for creating
            visually appealing and user-friendly websites, I am actively seeking
            new opportunities to apply and enhance my skills as a Full Stack
            developer. Currently, I am primarily focused on working with the
            React.js framework, which has allowed me to develop dynamic and
            interactive user interfaces.
          </p>
        </div>
        <div className="w-full">
        <Image
          src={myPhoto}
          className="object-cover rounded-full h-96 w-96 inset-0"
          alt={myPhoto}
        />
        </div>
      </div>
    </div>
  );
};

export default About;
