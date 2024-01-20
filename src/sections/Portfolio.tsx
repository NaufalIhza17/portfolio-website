"use client";

import * as React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { useState } from "react";

export default function PortfolioSection() {
  Chart.register(ArcElement);
  const generateChartData = (label: string, value: number) => ({
    label,
    datasets: [
      {
        label,
        data: [value, 100 - value],
        backgroundColor: ["#ff9f40", "#c9cbcf"],
        borderWidth: 0,
        hoverBackgroundColor: ["#d4802c", "#c9cbcf"],
      },
    ],
  });

  const projects = [
    {
      images: "/projects/1.webp",
      title: "Imagination Lombok",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum consequat nisl vel pretium. In aliquam sem fringilla ut morbi. Pellentesque habitant morbi tristique senectus. Velit laoreet id donec ultrices tincidunt arcu non.",
      languages: [
        generateChartData("TypeScript", 93.7),
        generateChartData("JavaScript", 3),
        generateChartData("CSS", 3.2),
         generateChartData("Shell", 0.1),
      ],
    },
  ];

  const [isProj, setProj] = useState(0);
  return (
    <section className="h-full">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="flex flex-col-reverse sm:flex-col h-full gap-8 lg:gap-14"
        >
          <div className="flex flex-col xl:flex-row justify-center items-start gap-5 h-fit">
            <div className="flex flex-col md:flex-row justify-center items-start gap-5 h-full w-full">
              <button className="group w-full md:h-full">
                <div className="bg-gradient-to-b group-hover:bg-gradient-to-t from-[#d9d9d9] to-[#E6E6E6] rounded-lg shadow-md md:h-full flex items-center justify-center">
                  <p className="mix-blend-overlay group-hover:mix-blend-darken p-3">
                    NEXT
                  </p>
                </div>
              </button>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={project.images} alt="" fetchPriority="high" />
              </div>
            </div>
            <div className="flex flex-col gap-2 text-[#4d4d4d] h-full xl:max-w-lg 2xl:max-w-2xl overflow-y-scroll">
              <p className="text-2xl font-semibold">{project.title}</p>
              <p>{project.description}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-col-reverse lg:flex-row justify-between items-start gap-5 lg:items-end">
            <div className="flex flex-col gap-3 w-full items-end lg:items-start">
              <p className="text-6xl lg:text-7xl font-extrabold">
                Project <span className="text-[#0057FF]">#</span>
                {idx + 1}
              </p>
              <p className="text-3xl font-bold text-[#505050]">My Portfolio</p>
            </div>
            <div className="w-full grid grid-flow-col gap-2 sm:gap-5">
              {project.languages.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-5"
                >
                  <div className="w-14 h-14 md:w-24 md:h-24 xl:w-32 xl:h-32">
                    <Doughnut data={data} />
                  </div>
                  <p className="text-sm md:text-base">{data.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
