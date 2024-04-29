"use client";

import * as React from "react";
import { Profile } from "~/img";
import Image from "next/image";
import {
  DownloadIcon,
  GithubIcon,
  GmailIcon,
  InstagramIcon,
  LinkedinIcon,
} from "~/icon";
import Link from "next/link";
import { Reveal } from "@/components";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function Home() {
  // const [isInView, setIsInView] = useState(false);
  const [isInViewProfile, setIsInViewProfile] = useState(false);
  const [isInViewName, setIsInViewName] = useState(false);
  const [isInViewDescription, setIsInViewDescription] = useState(false);
  const [isInViewConnect, setIsInViewConnect] = useState(false);

  const ref = useRef(null);

  // const inView = useInView(ref, { once: true });
  const inViewProfile = useInView(ref, { once: true });
  const inViewName = useInView(ref, { once: true });
  const inViewDescription = useInView(ref, { once: true });
  const inViewConnect = useInView(ref, { once: true });

  // useEffect(() => {
  //   setIsInView(inView);
  // }, [inView]);

  useEffect(() => {
    setIsInViewProfile(inViewProfile);
  }, [inViewProfile]);

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
    <main
      ref={ref}
      className="flex flex-col items-center justify-center gap-5 pt-[15%] px-5"
    >
      <Reveal isInView={isInViewProfile}>
        <Image src={Profile} alt="" width={160} height={160} />
      </Reveal>
      <Reveal isInView={isInViewName}>
        <p className="font-bold text-xl tracking-[0.2em]">Naufal Ihza</p>
      </Reveal>
      <Reveal isInView={isInViewDescription}>
        <p className="text-gray-main dark:text-gray-300 text-center font-light leading-tight">
          Hi! My journey as a computer science enthusiast is marked by
          continuous learning, a passion for problem-solving, and a commitment
          to delivering impactful digital experiences. I have actively applied
          my skills through various projects, demonstrating my ability to create
          robust and user-friendly web applications. Additionally, I&apos;ve
          gained practical industry experience through an internship and
          freelance, refining my skills and gaining insights into real-world
          applications of computer science.
        </p>
      </Reveal>
      <Reveal isInView={isInViewConnect}>
        <div className="border-t border-black/50 dark:border-white/50 flex items-center gap-16 py-5 mt-[15%]">
          <div className="relative">
            <p className="absolute top-1/2 left-1 transform -translate-y-1/2 text-lg text-black dark:text-white mix-blend-darken dark:mix-blend-normal font-light">
              CONNECT
            </p>
            <div className="bg-purple-main w-[64px] h-[30px]"></div>
          </div>
          <div className="flex gap-3 h-fit">
            <Link href={"https://github.com/NaufalIhza17"} passHref={true}>
              <Image src={GithubIcon} alt="" width={24} height={24} />
            </Link>
            <Link href={"mailto:nawfal17syahzada@gmail.com"} passHref={true}>
              <Image src={GmailIcon} alt="" width={24} height={24} />
            </Link>
            <Link
              href={"https://www.instagram.com/ihzasyahzada/"}
              passHref={true}
            >
              <Image src={InstagramIcon} alt="" width={24} height={24} />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/ihzasyahzada/"}
              passHref={true}
            >
              <Image src={LinkedinIcon} alt="" width={24} height={24} />
            </Link>
            <Link
              href={"/download/Resume_MochammadNaufalIhzaSyahzada.pdf"}
              passHref={true}
              download={true}
            >
              <Image src={DownloadIcon} alt="" width={24} height={24} />
            </Link>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
