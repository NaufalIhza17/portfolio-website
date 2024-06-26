"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface CarProps {
  title: string;
  description?: string;
  contributor?: string[];
  code?: string;
  url?: string;
  imgPath?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  contributor,
  code,
  url,
  imgPath,
  className,
}: CarProps) {
  const [current, setCurrent] = useState("text");

  const changeCurrent = (what: string) => {
    setCurrent(what);
  };

  return (
    <div
      className={`flex flex-col items-center justify-start py-8 px-5 gap-5 container-base hover:bg-white/40 dark:hover:bg-black/20 hover:-translate-x-2 hover:-translate-y-2 transition-all ${className}`}
    >
      <div className="flex gap-3">
        <div className="bg-black rounded-lg w-[270px] h-[180px] relative overflow-hidden">
          {imgPath ? (
            <Image
              src={`/img/${imgPath}`}
              alt=""
              width={270}
              height={180}
              className="absolute z-10 top-0 left-0"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-xs">
              no image to show
              </p>
            </div>
          )}
          {/* <button className="absolute z-20 top-0 left-0 w-[270px] h-[180px] opacity-0 hover:bg-black/50 hover:opacity-100 transition-all">
            <p className="font-medium text-white">ZOOM</p>
          </button> */}
        </div>
        <div className="flex flex-col gap-3">
          <button
            className={`card group bg-[#D9D9D9] hover:bg-[#FF7A00] ${
              current === "text" && "bg-[#FF7A00]"
            }`}
            onClick={() => changeCurrent("text")}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              className={`fill-black group-hover:fill-white ${
                current === "text" && "fill-white"
              }`}
            >
              <path d="M2.0625 12.75H11.4375C11.7482 12.75 12 13.0018 12 13.3125C12 13.5973 11.7884 13.8326 11.5138 13.8699L11.4375 13.875H2.0625C1.75184 13.875 1.5 13.6232 1.5 13.3125C1.5 13.0277 1.71162 12.7924 1.98617 12.7551L2.0625 12.75ZM2.0625 9.75H15.9375C16.2482 9.75 16.5 10.0018 16.5 10.3125C16.5 10.5973 16.2884 10.8326 16.0138 10.8699L15.9375 10.875H2.0625C1.75184 10.875 1.5 10.6232 1.5 10.3125C1.5 10.0277 1.71162 9.79238 1.98617 9.75513L2.0625 9.75ZM2.0625 6.75H15.9375C16.2482 6.75 16.5 7.00184 16.5 7.3125C16.5 7.59727 16.2884 7.83262 16.0138 7.86986L15.9375 7.875H2.0625C1.75184 7.875 1.5 7.62316 1.5 7.3125C1.5 7.02773 1.71162 6.79238 1.98617 6.75513L2.0625 6.75ZM2.0625 3.75H15.9375C16.2482 3.75 16.5 4.00184 16.5 4.3125C16.5 4.59727 16.2884 4.83262 16.0138 4.86987L15.9375 4.875H2.0625C1.75184 4.875 1.5 4.62316 1.5 4.3125C1.5 4.02773 1.71162 3.79238 1.98617 3.75513L2.0625 3.75Z" />
            </svg>
          </button>
          {code && (
            <button
              className={`card group bg-[#D9D9D9] hover:bg-[#FF7A00] ${
                current === "code" && "bg-[#FF7A00]"
              }`}
              onClick={() => changeCurrent("code")}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                className={`fill-black group-hover:fill-white ${
                  current === "code" && "fill-white"
                }`}
              >
                <g clip-path="url(#clip0_1166_224)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.1875 2.12567C8.8422 2.06699 8.3715 2.06254 7.52235 2.06254C6.08483 2.06254 5.06306 2.06373 4.28839 2.16741C3.52947 2.26898 3.0934 2.4595 2.77643 2.77647C2.45902 3.09387 2.26877 3.52861 2.16732 4.28318C2.06369 5.05392 2.0625 6.06993 2.0625 7.50008V10.5001C2.0625 11.9302 2.06369 12.9461 2.16732 13.7169C2.26877 14.4715 2.45902 14.9062 2.77643 15.2236C3.09383 15.5411 3.52857 15.7313 4.28314 15.8327C5.05388 15.9364 6.06988 15.9376 7.5 15.9376H10.5C11.9301 15.9376 12.9461 15.9364 13.7169 15.8327C14.4714 15.7313 14.9062 15.5411 15.2236 15.2236C15.541 14.9062 15.7312 14.4715 15.8326 13.7169C15.9363 12.9461 15.9375 11.9302 15.9375 10.5001V10.1722C15.9375 9.02018 15.9294 8.4741 15.8071 8.06258H13.4597C12.6101 8.06258 11.9158 8.06258 11.3677 7.98885C10.7947 7.91183 10.2979 7.7451 9.90142 7.34862C9.5049 6.95209 9.33817 6.45534 9.26115 5.88238C9.1875 5.33423 9.1875 4.63993 9.1875 3.79031V2.12567ZM10.3125 2.70713V3.75004C10.3125 4.64982 10.3137 5.26808 10.3761 5.73247C10.4364 6.18069 10.5442 6.40047 10.6969 6.55312C10.8496 6.70578 11.0693 6.81365 11.5176 6.87391C11.982 6.93635 12.6002 6.93754 13.5 6.93754H15.0146C14.7922 6.72188 14.5074 6.46348 14.1375 6.13056L11.1684 3.45838C10.8043 3.13075 10.5334 2.88891 10.3125 2.70713ZM7.63162 0.937519C8.67007 0.937241 9.34095 0.937069 9.95842 1.17402C10.5759 1.41097 11.0724 1.85802 11.8405 2.54967C11.8669 2.57355 11.8938 2.59771 11.921 2.62218L14.89 5.29434C14.9217 5.32279 14.9529 5.35088 14.9837 5.37862C15.8715 6.17711 16.4455 6.69344 16.7543 7.38677C17.0631 8.08005 17.0629 8.85218 17.0625 10.0462C17.0625 10.0877 17.0625 10.1297 17.0625 10.1722V10.5424C17.0625 11.9207 17.0625 13.0124 16.9477 13.8668C16.8294 14.7461 16.5803 15.4578 16.0191 16.0191C15.4578 16.5804 14.746 16.8295 13.8667 16.9477C13.0123 17.0626 11.9206 17.0626 10.5423 17.0626H7.45769C6.07937 17.0626 4.98764 17.0626 4.13324 16.9477C3.25392 16.8295 2.54221 16.5804 1.98093 16.0191C1.41966 15.4578 1.17057 14.7461 1.05236 13.8668C0.937478 13.0124 0.937485 11.9207 0.9375 10.5424V7.45773C0.937485 6.07941 0.937478 4.98768 1.05236 4.13328C1.17057 3.25396 1.41966 2.54225 1.98093 1.98097C2.54264 1.41927 3.25674 1.17045 4.13915 1.05235C4.99712 0.937519 6.09427 0.937526 7.48014 0.937541H7.52235C7.55918 0.937541 7.59562 0.937534 7.63162 0.937519Z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.69747 9.97333C7.9884 10.0824 8.13577 10.4067 8.02665 10.6975L6.90169 13.6975C6.79261 13.9884 6.46837 14.1358 6.17749 14.0267C5.88661 13.9177 5.73923 13.5934 5.84831 13.3025L6.97331 10.3025C7.08239 10.0117 7.40662 9.86428 7.69747 9.97333ZM5.64775 10.1023C5.86741 10.3219 5.86741 10.6781 5.64775 10.8978L5.29549 11.25L5.64775 11.6023C5.86741 11.8219 5.86741 12.1781 5.64775 12.3978C5.42808 12.6175 5.07192 12.6175 4.85225 12.3978L4.10225 11.6478C3.88258 11.4281 3.88258 11.0719 4.10225 10.8523L4.85225 10.1023C5.07192 9.88258 5.42808 9.88258 5.64775 10.1023ZM8.22727 11.6023C8.44695 11.3826 8.80305 11.3826 9.02272 11.6023L9.77272 12.3523C9.9924 12.5719 9.9924 12.9281 9.77272 13.1478L9.02272 13.8978C8.80305 14.1175 8.44695 14.1175 8.22727 13.8978C8.0076 13.6781 8.0076 13.3219 8.22727 13.1023L8.57947 12.75L8.22727 12.3978C8.0076 12.1781 8.0076 11.8219 8.22727 11.6023Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1166_224">
                    <rect width="18" height="18" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          )}
          {url && (
            <button
              className={`card group bg-[#D9D9D9] hover:bg-[#FF7A00] ${
                current === "url" && "bg-[#FF7A00]"
              }`}
              onClick={() => changeCurrent("url")}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                className={`fill-black group-hover:fill-white ${
                  current === "url" && "fill-white"
                }`}
              >
                <path d="M16.5003 9.06634C16.5013 10.5408 16.0678 11.9829 15.2538 13.2124C14.4398 14.4418 13.2814 15.4041 11.9236 15.9788C10.5657 16.5536 9.06854 16.7154 7.61925 16.4439C6.16995 16.1725 4.83281 15.4799 3.77497 14.4527C2.71712 13.4255 1.98552 12.1093 1.67159 10.6686C1.35767 9.22793 1.47536 7.72666 2.00995 6.35249C2.54453 4.97832 3.47231 3.7922 4.67729 2.9424C5.88227 2.0926 7.31101 1.61683 8.7849 1.57455C8.92673 1.5562 9.07033 1.5562 9.21216 1.57455C11.163 1.62881 13.0158 2.44173 14.3768 3.84054C15.7377 5.23935 16.4995 7.11471 16.5003 9.06634ZM6.48942 15.0044C6.64984 15.072 6.81248 15.133 6.97732 15.1873C5.99471 13.482 5.4809 11.547 5.48806 9.57887H2.57016C2.66536 10.755 3.08101 11.8826 3.77197 12.8391C4.46293 13.7956 5.40277 14.5445 6.48942 15.0044ZM3.05616 6.55771C2.79039 7.18508 2.62695 7.851 2.57206 8.53013H5.48806C5.48213 6.57385 5.98839 4.65009 6.95648 2.95013C6.79921 3.00255 6.64353 3.06129 6.48942 3.12634C4.94331 3.78161 3.71228 5.01196 3.05616 6.55771ZM11.4593 8.53013C11.436 7.79518 11.3533 7.06333 11.2121 6.34171C11.0739 5.60343 10.8471 4.88454 10.5366 4.20065C10.1131 3.29876 9.58069 2.71044 9.11837 2.62139C9.03848 2.6202 8.95858 2.6202 8.87869 2.62139C8.41637 2.71044 7.88395 3.29876 7.46048 4.2016C7.15027 4.88553 6.92379 5.60442 6.78595 6.34265C6.64475 7.06396 6.56206 7.7955 6.53869 8.53013H11.4593ZM10.5366 13.9074C10.8471 13.2235 11.0739 12.5046 11.2121 11.7663C11.3529 11.045 11.4353 10.3135 11.4584 9.57887H6.53963C6.56299 10.3138 6.64568 11.0457 6.7869 11.7673C6.92479 12.5052 7.15127 13.2238 7.46142 13.9074C7.92279 14.8889 8.51205 15.499 8.99995 15.499C9.48784 15.499 10.0771 14.8889 10.5375 13.9074H10.5366ZM14.9437 11.575C15.2125 10.9402 15.3766 10.2661 15.4297 9.57887H12.5099C12.5175 11.5477 12.0037 13.4833 11.0207 15.1892C11.1855 15.1349 11.3488 15.0736 11.5105 15.0054C13.0564 14.3504 14.2874 13.1204 14.9437 11.575ZM11.5105 3.12634C11.3562 3.06122 11.1994 3.00212 11.0406 2.94918C12.0088 4.64911 12.515 6.57289 12.509 8.52918H15.4278C15.3289 7.35722 14.9117 6.23455 14.2214 5.28237C13.531 4.33019 12.5936 3.58468 11.5105 3.12634Z" />
              </svg>
            </button>
          )}
          {contributor && (
            <button
              className={`card group bg-[#D9D9D9] hover:bg-[#FF7A00] ${
                current === "contributor" && "bg-[#FF7A00]"
              }`}
              onClick={() => changeCurrent("contributor")}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                className={`fill-black group-hover:fill-white ${
                  current === "contributor" && "fill-white"
                }`}
              >
                <path d="M10.26 7.92004H9.18002H8.10002C7.50602 7.92004 7.02002 8.40604 7.02002 9.00004V10.62C7.02002 10.818 7.11002 10.998 7.23602 11.124C7.36202 11.25 7.54202 11.34 7.74002 11.34V12.96C7.74002 13.554 8.22602 14.04 8.82002 14.04H9.18002H9.54002C10.134 14.04 10.62 13.554 10.62 12.96V11.34C10.818 11.34 10.998 11.268 11.124 11.124C11.25 10.998 11.34 10.818 11.34 10.62V9.00004C11.34 8.40604 10.854 7.92004 10.26 7.92004Z" />
                <path d="M9.17992 7.19999C9.8758 7.19999 10.4399 6.63587 10.4399 5.93999C10.4399 5.24411 9.8758 4.67999 9.17992 4.67999C8.48404 4.67999 7.91992 5.24411 7.91992 5.93999C7.91992 6.63587 8.48404 7.19999 9.17992 7.19999Z" />
                <path d="M6.58798 12.006C6.55198 11.97 6.49798 11.934 6.46198 11.898C6.11998 11.538 5.92198 11.088 5.92198 10.62V9.00001C5.92198 8.42401 6.15598 7.88401 6.53398 7.50601C6.64198 7.39801 6.55198 7.20001 6.40798 7.20001C6.10198 7.20001 5.75998 7.20001 5.75998 7.20001H4.67998C4.08598 7.20001 3.59998 7.68601 3.59998 8.28001V9.90001C3.59998 10.098 3.68998 10.278 3.81598 10.404C3.94198 10.53 4.12198 10.62 4.31998 10.62V12.24C4.31998 12.834 4.80598 13.32 5.39998 13.32H5.75998H6.11998C6.28198 13.32 6.42598 13.284 6.55198 13.23C6.62398 13.194 6.65998 13.14 6.65998 13.068C6.65998 12.852 6.65998 12.348 6.65998 12.15C6.65998 12.096 6.64198 12.042 6.58798 12.006Z" />
                <path d="M5.76 6.48002C6.45588 6.48002 7.02 5.9159 7.02 5.22002C7.02 4.52414 6.45588 3.96002 5.76 3.96002C5.06412 3.96002 4.5 4.52414 4.5 5.22002C4.5 5.9159 5.06412 6.48002 5.76 6.48002Z" />
                <path d="M13.68 7.20001H12.6C12.6 7.20001 12.258 7.20001 11.952 7.20001C11.79 7.20001 11.718 7.38001 11.826 7.50601C12.204 7.90201 12.438 8.42401 12.438 9.00001V10.62C12.438 11.088 12.258 11.538 11.898 11.898C11.862 11.934 11.826 11.97 11.772 12.006C11.736 12.042 11.7 12.096 11.7 12.15C11.7 12.348 11.7 12.834 11.7 13.068C11.7 13.14 11.736 13.212 11.808 13.23C11.934 13.284 12.078 13.32 12.24 13.32H12.6H12.96C13.554 13.32 14.04 12.834 14.04 12.24V10.62C14.238 10.62 14.418 10.548 14.544 10.404C14.67 10.278 14.76 10.098 14.76 9.90001V8.28001C14.76 7.68601 14.274 7.20001 13.68 7.20001Z" />
                <path d="M12.6 6.48002C13.2958 6.48002 13.86 5.9159 13.86 5.22002C13.86 4.52414 13.2958 3.96002 12.6 3.96002C11.9041 3.96002 11.34 4.52414 11.34 5.22002C11.34 5.9159 11.9041 6.48002 12.6 6.48002Z" />
              </svg>
            </button>
          )}
        </div>
      </div>
      <div
        className={`${inter.className} text-[#5A5A5A] dark:text-[#E7E7E7] w-full`}
      >
        {current === "contributor" && (
          <div className="flex flex-col gap-3">
            <p className="uppercase">Contributor</p>
            <p className="font-light text-sm">
              {contributor?.map((cont, index) => (
                <span key={index} className="">
                  {cont} {index !== contributor.length - 1 && "- "}
                </span>
              ))}
            </p>
          </div>
        )}
        {current === "text" && (
          <div className="flex flex-col gap-3">
            <p className="uppercase">{title}</p>
            <p className="font-light text-sm">{description}</p>
          </div>
        )}
        {current === "url" && (
          <div className="flex flex-col gap-3">
            <p className="uppercase">Website URL</p>
            <p className="font-light text-sm">{url}</p>
          </div>
        )}
        {current === "code" && (
          <div className="flex flex-col gap-3">
            <p className="uppercase">Source Code</p>
            <p className="font-light text-sm">{code}</p>
          </div>
        )}
      </div>
    </div>
  );
}
