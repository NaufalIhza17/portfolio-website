"use client";

import Image from "next/image";
import { useState } from "react";
import {
  DownloadIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  DarkModeIcon,
  LightModeIcon,
  HelpIcon,
} from "~/icon";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Helper() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [initialTheme, setInitialTheme] = useState("dark");
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setInitialTheme(newTheme);
  };
  const toggleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <section
        className={`fixed z-40 bottom-5 right-5 flex gap-3 cursor-pointer select-none transition-all delay-100 ${
          !isShow ? "translate-x-[90%]" : ""
        }`}
      >
        <div
          className="w-[40px] h-[40px] flex items-center justify-center shadow-2xl"
          onClick={toggleShow}
        >
          <Image
            src={HelpIcon}
            alt=""
            width={28}
            height={28}
            className="drop-shadow-md"
          />
        </div>
        <div
          className="bg-black w-[40px] h-[40px] flex items-center justify-center shadow-2xl overflow-hidden relative"
          onClick={toggleTheme}
        >
          <Image
            src={DarkModeIcon}
            alt=""
            width={24}
            height={24}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity delay-500 ${
              initialTheme !== "light" ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src={LightModeIcon}
            alt=""
            width={24}
            height={24}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity delay-500 ${
              initialTheme !== "dark" ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
        <div
          className="bg-purple-main w-[150px] h-[40px] flex items-center justify-center shadow-2xl uppercase text-white font-extralight text-lg italic overflow-hidden relative"
          onClick={toggleOpen}
        >
          <p
            className={`transition-all absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center delay-75 ${
              !isOpen ? "" : "translate-y-full"
            }`}
          >
            Contact Me
          </p>
          <p
            className={`transition-all absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center delay-75 ${
              isOpen ? "" : "translate-y-full"
            }`}
          >
            Close
          </p>
        </div>
      </section>
      <section
        className={`fixed z-30 bottom-0 border-t border-light-gray-main w-full h-[55%] sm:h-[50%] transition-all delay-100 ${
          isOpen ? "" : "translate-y-full"
        }`}
      >
        <div className="bg-light-gray-main/85 dark:bg-slate-900/85 w-full h-full flex justify-center">
          <div className="max-w-[440px] w-full py-[3%] flex flex-col gap-[3%] max-sm:px-5">
            <p className="text-3xl font-light text-right">
              <span className="font-bold">Contact</span> Me
            </p>
            <form action="" className="grid grid-cols-12 gap-2">
              <div className="col-span-12 sm:col-span-6 text-right">
                <label htmlFor="" className="font-extralight italic">
                  Name<span className="text-orange-main">*</span>
                </label>
                <input
                  type="text"
                  className="bg-white dark:bg-gray-400 w-full py-1 px-2 font-extralight dark:text-white dark:placeholder:text-white placeholder:text-gray-main/50"
                  placeholder="Enter your name"
                />
              </div>
              <div className="col-span-12 sm:col-span-6 text-right">
                <label htmlFor="" className="font-extralight italic">
                  Email<span className="text-orange-main">*</span>
                </label>
                <input
                  type="email"
                  className="bg-white dark:bg-gray-400 w-full py-1 px-2 font-extralight dark:text-white dark:placeholder:text-white placeholder:text-gray-main/50"
                  placeholder="Enter your email"
                />
              </div>
              <div className="col-span-12 text-right">
                <label htmlFor="" className="font-extralight italic">
                  Message<span className="text-orange-main">*</span>
                </label>
                <input
                  type="text"
                  className="bg-white dark:bg-gray-400 w-full py-1 px-2 font-extralight dark:text-white dark:placeholder:text-white placeholder:text-gray-main/50"
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                className="col-span-full bg-white hover:bg-orange-main transition-all delay-150 text-gray-main hover:text-white font-light italic text-sm"
              >
                <p>send</p>
              </button>
            </form>
            <div className="w-full mt-[3%] flex flex-col items-start gap-1 max-sm:hidden">
              <div className="grid grid-cols-4 gap-1 h-fit">
                <Link href={"https://github.com/NaufalIhza17"} passHref={true}>
                  <Image
                    src={GithubIcon}
                    alt=""
                    width={32}
                    height={32}
                    className="scale-75 hover:scale-100 transition-all delay-200"
                  />
                </Link>
                <Link
                  href={"https://www.instagram.com/ihzasyahzada/"}
                  passHref={true}
                >
                  <Image
                    src={InstagramIcon}
                    alt=""
                    width={32}
                    height={32}
                    className="scale-75 hover:scale-100 transition-all delay-200"
                  />
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/ihzasyahzada/"}
                  passHref={true}
                >
                  <Image
                    src={LinkedinIcon}
                    alt=""
                    width={32}
                    height={32}
                    className="scale-75 hover:scale-100 transition-all delay-200"
                  />
                </Link>
                <Link
                  href={"/download/Resume_MochammadNaufalIhzaSyahzada.pdf"}
                  passHref={true}
                  download={true}
                >
                  <Image
                    src={DownloadIcon}
                    alt=""
                    width={32}
                    height={32}
                    className="scale-75 hover:scale-100 transition-all delay-200"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
