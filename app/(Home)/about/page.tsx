import { Button } from "@/components/ui/button";
import myPhoto from "../../../src/images/formal.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { FlipWords } from "@/components/ui/flip-words";

const About: React.FC = () => {
  const words = [`Software-Engineer`, "Full-Stack-Developer"];

  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="lg:flex mx-auto container justify-center items-center">
        <div className="w-full justify-center space-y-5">
          <div className="text-2xl space-y-3 mb-5 md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Mayinuddin Munna <br />I am
            <FlipWords words={words} />
          </div>
          <p>
            I am an enthusiastic and creative Full Stack developer currently in
            the final year of my graduate program, and I am eager to kickstart a
            rewarding career in this field. With a strong passion for creating
            visually appealing and user-friendly websites, I am actively seeking
            new opportunities to apply and enhance my skills as a Full Stack
            developer. Currently, I am primarily focused on working with the
            React.js framework, which has allowed me to develop dynamic and
            interactive user interfaces.
          </p>
          <Button>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
        <div className="w-full flex justify-center">
          <Image
            src={myPhoto}
            className="object-cover rounded-full h-96 w-96 inset-0"
            alt="my photo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
