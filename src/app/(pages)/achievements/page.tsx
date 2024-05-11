"use client";

import { Card, Pagination, LayoutCustom } from "@/components";
import { useState, useEffect } from "react";
import { useWindowWidth } from "@/hooks";

export default function Achievements() {
  const windowWidth = useWindowWidth();
  const [pageSize, setPageSize] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedData = achievementsData.slice(startIndex, endIndex);
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
              imgPath={data.imgPath}
            />
          ))}
        </div>
        <Pagination
          totalPage={Math.ceil(achievementsData.length / pageSize)}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </section>
    </LayoutCustom>
  );
}

const achievementsData = [
  {
    title: "Front End Developer Internship - PT. Gawe Gawe Solusi Teknologi",
    description:
      "During my internship, I honed my skills in Redux.js, Tailwindcss, and Next.js while working on a business website and a Learning Management System. I also gained valuable experience dealing with real clients, enhancing my ability to deliver practical solutions to meet their needs.",
    imgPath: "cert-one.png",
  },
  {
    title: "Freelance as Web Developer - Fastwork Website",
    description:
      "I've discovered that freelancing could be my opportunity to showcase my website coding skills, honed through experience and internships. Although I've completed only one client project so far, I'm proud of the progress I've made and am ready to take the next step in improving myself.",
  },
  {
    title: "1st Place at Wordpress Website Competition - HIMTIFEST 2023",
    description:
      'Within a month, my two friends and I developed a PHP-based WordPress website focused on Indonesian culture. We created an informational website about "Jamu," which is a traditional herbal remedy from Indonesia.',
    imgPath: "cert-two.png",
  },
  {
    title:
      "External Relations Division - Himpunan Departemen  Teknik Informatika ITS",
    description:
      "Accomplishments so far are effective collaboration, proficient communication, and adept handling of individuals and groups.",
    imgPath: "cert-fourteen.png",
  },
  {
    title: "Web Development Team - INDOCOR ITS",
    description:
      "In the web development division, I mastered HTML, CSS, and JavaScript as my core skills, and furthered my expertise with React.js, Next.js, Tailwind, and other frameworks. Additionally, I gained valuable experience in deploying websites, ensuring the delivery of functional and accessible web solutions.",
    imgPath: "cert-four.png",
  },
  {
    title:
      "Vice Chairman of Bootcamp And Seminar Technology Event - Schematics 2023",
    description:
      "I manage the planning and preparation of two national events, seminars, and bootcamps, as part of our division. While the events are yet to take place, I have been actively involved in their design and organization, ensuring all necessary arrangements are in place for their successful execution.",
    imgPath: "cert-thirteen.png",
  },
  {
    title: "Talent Management - Ini Lho ITS! 2023",
    description:
      "Obtained soft skills: public speaking, time management. Proficient in handling campus influencers and student ambassadors. Experienced in organizing events (upgrading sessions, welcome parties) and preparing ambassador tasks.",
    imgPath: "cert-nine.png",
  },
  {
    title: "Organizing Committee - OKKBK 2023",
    description:
      "Professional Orientation and Curriculum-Based Competency for Freshman",
    imgPath: "cert-five.png",
  },
  {
    title:
      "Staff of Seminar Tech Event Division - Schematics National Seminar of Technology 2022",
  },
];
