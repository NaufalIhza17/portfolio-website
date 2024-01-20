"use client";

import * as React from "react";
import { useState } from "react";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "Experience",
    },
    {
      title: "Skill",
    },
    {
      title: "Certificate",
    },
  ];

  const [isCurrent, setCurrent] = useState(0);

  function changeCurrent(achievementIndex: number) {
    setCurrent(achievementIndex);
  }

  return (
    <section className="flex justify-start h-full">
      <div className="flex flex-col h-full gap-8">
        <div className="flex flex-col gap-3">
          <p className="text-7xl font-extrabold">Achievements</p>
          <div className="flex gap-5 text-3xl font-semibold text-[#505050]">
            {achievements.map((achievement, idx) => (
              <p
                key={idx}
                className={`${isCurrent === idx && "underline"}`}
                onClick={() => changeCurrent(idx)}
              >
                {achievement.title}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="border border-[#505050] rounded-lg w-[464px] h-[401px] p-5 flex flex-col gap-3">
            <div className="bg-[#d9d9d9] w-full min-h-[150px] rounded-lg animate-pulse">
              <img src="" alt="" />
            </div>
            <p className="text-xl font-bold">Intern Certificate</p>
            <div className="h-full overflow-y-scroll">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                ea sequi, fugiat, minus accusantium nesciunt cupiditate
                temporibus praesentium labore beatae necessitatibus rem aliquid
                iure pariatur, fugit optio ratione earum porro. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Ipsam ea sequi,
                fugiat, minus accusantium nesciunt cupiditate temporibus
                praesentium labore beatae necessitatibus rem aliquid iure
                pariatur, fugit optio ratione earum porro. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Ipsam ea sequi, fugiat,
                minus accusantium nesciunt cupiditate temporibus praesentium
                labore beatae necessitatibus rem aliquid iure pariatur, fugit
                optio ratione earum porro.
              </p>
            </div>
          </div>
          <div className="border border-[#505050] rounded-lg w-[330px] h-[330px] p-5 flex flex-row gap-3">
            <div className="border border-[#505050] w-full min-h-[150px] rounded-lg"/>
            <div className="overflow-hidden flex flex-col gap-3">
              <p className="text-xl font-bold">Intern Certificate</p>
              <div className="h-full overflow-y-scroll">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam ea sequi, fugiat, minus accusantium nesciunt cupiditate
                  temporibus praesentium labore beatae necessitatibus rem
                  aliquid iure pariatur, fugit optio ratione earum porro. Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea
                  sequi, fugiat, minus accusantium nesciunt cupiditate
                  temporibus praesentium labore beatae necessitatibus rem
                  aliquid iure pariatur, fugit optio ratione earum porro. Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea
                  sequi, fugiat, minus accusantium nesciunt cupiditate
                  temporibus praesentium labore beatae necessitatibus rem
                  aliquid iure pariatur, fugit optio ratione earum porro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
