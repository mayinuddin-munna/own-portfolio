import Link from "next/link";
import { Button } from "./button";
import { FlipWords } from "./flip-words";
import { Spotlight } from "./Spotlight";

const Banner: React.FC = () => {
  const words = [`Software-Engineer`, "Full-Stack-Developer"];

  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="flex mx-auto container">
        <div className="w-full">
          <p className="text-neutral-100 dark:text-neutral-400">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 my-4">
            Mayinuddin Munna
          </h1>
          <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            As a
            <FlipWords words={words} />
          </div>
          <Button className="mt-7">
            <Link href="/contact">Contact</Link>
          </Button>
          {/* <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p> */}
        </div>
        <div className="w-full">
          <p className="text-center">adadada</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
