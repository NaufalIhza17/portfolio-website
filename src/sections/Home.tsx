"use client"

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import IGIcon from "~/icon/ig-icon.png";
import GmailIcon from "~/icon/gmail-icon.png";
import LinkedInIcon from "~/icon/linkedin-icon.png";
import DownloadIcon from "~/icon/download-icon.png";

export default function HomeSection() {
  const handleDownloadResume = () => {
    const fileUrl = '/download/Resume_MochammadNaufalIhzaSyahzada.pdf';

    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Resume_MochammadNaufalIhzaSyahzada.pdf';
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
  };
  return (
    <section className="flex justify-start h-full">
      <div className="flex flex-col gap-5 md:gap-9 h-fit">
        <div className="flex flex-col gap-3">
          <p className="text-2xl lg:text-[32px] font-bold text-[#505050]">
            Hello everyone, I’m
          </p>
          <p className="text-6xl xl:text-7xl font-extrabold text-black">
            Moch. <span className="text-[#0057FF]">Naufal Ihza</span> Syahzada
          </p>
          <div className="flex gap-2 md:gap-5">
            <div className="flex gap-3 items-center">
              <div className="bg-gradient-to-br from-transparent to-[#1DCC00] rounded-full w-4 h-4 animate-pulse" />
              <div className="flex flex-col text-[#505050]">
                <p className="font-bold">Open to Work</p>
                <p className="text-xs">All Position</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="bg-gradient-to-br from-transparent to-[#9b1212] rounded-full w-4 h-4 animate-pulse" />
              <div className="flex flex-col text-[#505050]">
                <p className="font-bold ">Bachelor’s Student</p>
                <p className="text-xs">
                  Sepuluh Nopember Institute of Technology
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 xl:gap-24 h-full">
          <p className="text-[#4d4d4d] max-w-[464px]">
            My journey as a{" "}
            <span className="font-bold">computer science enthusiast</span> is
            marked by continuous learning, a passion for problem-solving, and a
            commitment to delivering impactful digital experiences. I have
            actively applied my skills through{" "}
            <span className="font-bold">various projects</span>, demonstrating
            my ability to create robust and user-friendly{" "}
            <span className="font-bold">web applications</span>. Additionally,
            I've gained practical industry experience through an
            <span className="font-bold">internship</span>, refining my skills
            and gaining insights into real-world applications of computer
            science.
          </p>
          <div className="flex flex-col h-auto gap-3 sm:gap-5 xl:justify-between">
            <Link href={`https://www.instagram.com/ihzasyahzada/`} target="_blank" className="flex gap-2 items-center">
              <Image src={IGIcon} alt="IG Icon" width={30} height={30} className="min-w-[28px]"/>
              <p>
                @ihzasyahzada<span className="text-[#FF7A00]">*</span>
              </p>
            </Link>
            <Link href={`mailto:nawfal17syahzada@gmail.com?subject=Subject%20of%20the%20email&body=Body%20of%20the%20email`} target="_blank" className="flex gap-2 items-center">
              <Image src={GmailIcon} alt="Gmail Icon" width={30} height={30} className="min-w-[28px]"/>
              <p>
                nawfal17syahzada@gmail.com
                <span className="text-[#FF7A00]">*</span>
              </p>
            </Link>
            <Link href={`https://www.linkedin.com/in/ihzasyahzada`} target="_blank" className="flex gap-2 items-center">
              <Image
                src={LinkedInIcon}
                alt="Linkedin Icon"
                width={30}
                height={30}
                className="min-w-[28px]"
              />
              <p>
                linkedin.com/in/ihzasyahzada
                <span className="text-[#FF7A00]">*</span>
              </p>
            </Link>
            <button onClick={handleDownloadResume} className="flex gap-2 items-center">
              <Image
                src={DownloadIcon}
                alt="Download Icon"
                width={30}
                height={30}
                className="min-w-[28px]"
              />
              <p>
                Download Resume<span className="text-[#FF7A00]">*</span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
