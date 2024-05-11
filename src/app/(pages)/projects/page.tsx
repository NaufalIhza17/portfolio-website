"use client";

import { Card, Pagination, LayoutCustom } from "@/components";
import { useState, useEffect } from "react";
import { useWindowWidth } from "@/hooks";

export default function Projects() {
  const windowWidth = useWindowWidth();
  const [pageSize, setPageSize] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedData = projectsData.slice(startIndex, endIndex);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (windowWidth < 1024) setPageSize(3);
    else if (windowWidth < 2000) setPageSize(6);
    else setPageSize(9);
  }, [windowWidth]);
  return (
    <LayoutCustom>
      <section className="flex flex-col items-center justify-center gap-5 px-5">
        <div className="text-sm grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3">
          {displayedData.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              description={data.description}
              url={data.url}
              contributor={data.contributor}
              code={data.code}
              imgPath={data.imgPath}
            />
          ))}
        </div>
        <Pagination
          totalPage={Math.ceil(projectsData.length / pageSize)}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </section>
    </LayoutCustom>
  );
}

const projectsData = [
  {
    title: "Recipe App",
    description:
      "This isn't my first Flutter project; I've attempted one before, but it was never completed. Now, I'm aiming to delve deeper into Flutter by creating a simple project that utilizes data from a public API. The concept of this app is to display recipes for various foods, with an added authentication process.",
    url: "",
    contributor: ["M Naufal Ihza Syahzada"],
    code: "github.com/NaufalIhza17/Computer_Graphics_FP",
    imgPath: "",
  },
  {
    title: "Dashboard KPI Website",
    description:
      "As a freelance website developer, I've been tasked with building a Key Performance Indicator Company Website for a company in Indonesia called Hasnur Siung Sinergi. The website will predominantly feature graphs and numbers, the sources of which are restricted from being shared as they contain private company data.",
    url: "",
    contributor: [
      "M Naufal Ihza Syahzada",
      "Tigo S Yoga",
      "Rafif Hikmatiar",
      "Sangsaka Wira",
      "etc",
    ],
    code: "",
    imgPath: "",
  },
  {
    title: "Promotion Website",
    description:
      "Imagination Lombok, a company offering vehicle rentals and vacation packages around Lombok, Indonesia, has recruited me and two other friends to enhance their website promotion. The website is static, so we haven't incorporated any APIs or backend components.",
    url: "imaginationlombok.com",
    contributor: [
      "M Naufal Ihza Syahzada",
      "Urdhanaka Aptanagi",
      "Christian Kevin Emor",
    ],
    code: "github.com/urdhanaka/imagination-lombok.git",
    imgPath: "",
  },
  {
    title: "Landing Page Website",
    description:
      "One of my freelance projects involves slicing Figma designs provided by the client. Three of us have been assigned to this task, and the end result will be static website.",
    url: "cpeks.vercel.app/",
    contributor: [
      "M Naufal Ihza Syahzada",
      "Tigo S Yoga",
      "Yazid Yasykur",
      "Sangsaka Wira",
    ],
    code: "github.com/tigoyoga/cpeks-website",
    imgPath: "",
  },
  {
    title: "Twitter Clone Website",
    description:
      "During my 5th semester at Sepuluh Nopember Institute of Technology, my friend and I developed a Laravel-based website that functions similarly to Twitter. We created a full-stack website capable of storing likes, comments, and bookmarks. Sadly I can't provide the website, due to the hosting",
    url: "",
    contributor: ["M Naufal Ihza Syahzada", "M Dzaky Farhan"],
    code: "github.com/idzakyfarhan/PBKK",
    imgPath: "",
  },
  {
    title: "Dashboard Website",
    description:
      "In this freelance project, I, as the front-end developer, was tasked with creating a website with Trello-like functionality for RoketMarket Company. However, the purpose of this functionality is not for productivity but for managing orders from their clients.",
    url: "",
    contributor: ["M Naufal Ihza Syahzada", "Sangsaka Wira"],
    code: "github.com/NaufalIhza17/Rocketmarket",
    imgPath: "",
  },
  {
    title: "Landing Page Website",
    description:
      "My role as a freelancer is to redesign the website for the company BisaIklan.id. Most of my work involves minor redesigns and slicing the static website.",
    url: "bisaiklan-id-nextjs.vercel.app/",
    contributor: ["M Naufal Ihza Syahzada", "Sangsaka Wira"],
    code: "github.com/NaufalIhza17/bisaiklan.id-nextjs",
    imgPath: "",
  },
  {
    title: "Landing Page Website",
    description:
      "I'm currently assisting OTW Sukses LPDP, a company that offers a tutoring program, in bringing their website to life to promote their services. The website is static and features numerous calls-to-action, resembling a typical landing page layout.",
    url: "www.otwsukses.site",
    contributor: [
      "M Naufal Ihza Syahzada",
      "Christian Kevin Emor",
      "Sangsaka Wira",
    ],
    code: "https://github.com/NaufalIhza17/otw-sukses",
    imgPath: "",
  },
  {
    title: "3D Game Website",
    description:
      "During my 4th semester at Sepuluh Nopember Institute of Technology, three friends and I decided to create a 3D game inspired by the 2D dinosaur game on Google for our final project.",
    url: "",
    contributor: [
      "M Naufal Ihza Syahzada",
      "M Dzaky Farhan",
      "Raden Roro Kayla Angelica P",
      "Khairiya Maisa Putri",
    ],
    code: "https://github.com/NaufalIhza17/Computer_Graphics_FP",
    imgPath: "",
  },
];
