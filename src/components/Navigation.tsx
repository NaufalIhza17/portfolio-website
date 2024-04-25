"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const sections = [
    {
      name: "home",
      path: "/",
    },
    { name: "portfolio", path: "/portfolio" },
    { name: "achievements", path: "/achievements" },
    { name: "about", path: "/about" },
  ];
  const isSectionText =
    "text-[#505050]/30 group-hover:text-[#505050]/50 transition-all";
  const pathName = usePathname();
  return (
    <section className="flex flex-col items-center gap-[18px]">
      <p className="font-major-mono text-[32px]">
        IH<span className="text-orange-main">Z</span>
        <span className="text-purple-main">A</span>
      </p>
      <div className="flex flex-row top-4 gap-[14px]">
        {sections.map((section, idx) => (
          <button key={idx} className="flex flex-col items-end group" disabled>
            <Link href={section.path}>
              <p
                className={`text-[#505050] dark:text-white font-extralight ${
                  pathName !== section.path && `${isSectionText}`
                }`}
              >
                {section.name}
              </p>
            </Link>
            {pathName === section.path && (
              <div className="border border-orange-main w-4" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
