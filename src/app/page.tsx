"use client";

import * as React from "react";
import { Profile } from "~/img";
import Image from "next/image";
import { Reveal, Connect, LayoutCustom } from "@/components";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function Home() {
  const ref = useRef(null);
  const [isInViewName, setIsInViewName] = useState(false);
  const [isInViewDescription, setIsInViewDescription] = useState(false);
  const [isInViewConnect, setIsInViewConnect] = useState(false);

  const inViewName = useInView(ref, { once: true });
  const inViewDescription = useInView(ref, { once: true });
  const inViewConnect = useInView(ref, { once: true });

  useEffect(() => {
    setIsInViewName(inViewName);
  }, [inViewName]);
  useEffect(() => {
    setIsInViewDescription(inViewDescription);
  }, [inViewDescription]);
  useEffect(() => {
    setIsInViewConnect(inViewConnect);
  }, [inViewConnect]);

  return (
    <LayoutCustom>
      <section
        ref={ref}
        className="flex flex-col items-center justify-center gap-5 px-5 relative"
      >
        <Image src={Profile} alt="" width={160} height={160} />
        <Reveal isInView={isInViewName}>
          <p className="font-bold text-xl tracking-[0.2em]">Naufal Ihza</p>
        </Reveal>
        <Reveal isInView={isInViewDescription} className="container-base">
          <p className="text-gray-main dark:text-gray-300 text-center font-light leading-tight">
            Hi! My journey as a computer science enthusiast is marked by
            continuous learning, a passion for problem-solving, and a commitment
            to delivering impactful digital experiences. I have actively applied
            my skills through various projects, demonstrating my ability to
            create robust and user-friendly web applications. Additionally,
            I&apos;ve gained practical industry experience through an internship
            and freelance, refining my skills and gaining insights into
            real-world applications of computer science.
          </p>
        </Reveal>
        <Reveal isInView={isInViewConnect}>
          <Connect />
        </Reveal>
      </section>
    </LayoutCustom>
  );
}
