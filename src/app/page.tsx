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

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-5 pt-[15%] px-5">
      <Image src={Profile} alt="" width={160} height={160} />
      <p className="font-bold text-xl tracking-[0.2em]">Naufal Ihza</p>
      <p className="text-gray-main dark:text-gray-300 text-center font-light leading-tight">
        Hi! My journey as a computer science enthusiast is marked by continuous
        learning, a passion for problem-solving, and a commitment to delivering
        impactful digital experiences. I have actively applied my skills through
        various projects, demonstrating my ability to create robust and
        user-friendly web applications. Additionally, I've gained practical
        industry experience through an internship and freelance, refining my
        skills and gaining insights into real-world applications of computer
        science.
      </p>
      <div className="border-t border-black/50 dark:border-white/50 flex items-center gap-16 py-5 mt-[15%]">
        <div className="relative">
          <p className="absolute top-1/2 left-1 transform -translate-y-1/2 text-lg text-black dark:text-white mix-blend-darken dark:mix-blend-normal font-light">CONNECT</p>
          <div className="bg-purple-main w-[64px] h-[30px]"></div>
        </div>
        <div className="flex gap-3 h-fit">
          <Image src={GithubIcon} alt="" width={24} height={24} />
          <Image src={GmailIcon} alt="" width={24} height={24} />
          <Image src={InstagramIcon} alt="" width={24} height={24} />
          <Image src={LinkedinIcon} alt="" width={24} height={24} />
          <Image src={DownloadIcon} alt="" width={24} height={24} />
        </div>
      </div>
    </main>
  );
}
