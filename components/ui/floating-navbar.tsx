"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { z } from "zod";
import { ThemeToggle } from "@/src/theme/ThemeToggle";
import { Button } from "./button";
import { Menu, X } from "lucide-react";

const navbarProps = z.object({
  appName: z.string().optional(),
  navItems: z.array(
    z.object({
      name: z.string(),
      link: z.string(),
    })
  ),
  className: z.string(),
});

type NavbarProps = z.infer<typeof navbarProps>;

export const FloatingNav: React.FC<NavbarProps> = ({
  appName,
  navItems,
  className,
}) => {
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll();

  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let previous = scrollYProgress.getPrevious() ?? 0;
      let direction = current - previous;

      // Always show the navbar when at the top (scrollYProgress is 0)
      if (current === 0) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex fixed inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-10 pr-2 pl-8 space-x-8",
          className
        )}
      >
        <nav className=" w-full justify-between flex-wrap border-b p-6 bg-background">
          <div className="flex justify-between w-full items-center">
            <div className="flex items-center flex-shrink-0 mr-6">
              <Link href="/" className="font-semibold text-xl tracking-tight">
                {appName}
              </Link>
            </div>

            <div className="hidden lg:flex items-end">
              {navItems?.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative dark:text-neutral-50 items-center flex space-x-16 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:block text-sm">
                    {navItem.name}
                  </span>
                </Link>
              ))}
            </div>

            <div className="flex items-center">
              <ThemeToggle />
              <div className="block lg:hidden ml-4">
                <Button
                  variant={"outline"}
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center px-2 py-2"
                >
                  {isOpen ? <X /> : <Menu />}
                </Button>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
              </div>
            </div>
          </div>
          <div
            className={`w-full block flex-grow lg:hidden ${
              isOpen ? "" : "hidden"
            }`}
          >
            <code className="text-sm flex justify-center">
              {navItems.map((navItem: any, idx: number) => (
                <Link key={idx} href={navItem.link} className="block">
                  <Button variant={"ghost"}>{navItem.name}</Button>
                </Link>
              ))}
            </code>
          </div>
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};
